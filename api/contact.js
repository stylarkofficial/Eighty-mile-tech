import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_TABLE = "contact_leads";

function getEnv(name) {
  const value = process.env[name];
  return typeof value === "string" ? value.trim() : "";
}

function sendJson(res, status, body) {
  res.status(status);
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.send(JSON.stringify(body));
}

function getPayload(req) {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  if (typeof req.body === "string" && req.body.trim()) {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }

  return null;
}

function sanitizeText(value, maxLength) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function toLeadRecord(payload, meta) {
  return {
    name: payload.name,
    email: payload.email,
    company: payload.company || null,
    message: payload.message,
    source: "website",
    submitted_at: new Date().toISOString(),
    metadata: meta,
  };
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.status(204);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.end();
    return;
  }

  if (req.method !== "POST") {
    sendJson(res, 405, { message: "Method not allowed." });
    return;
  }

  const rawPayload = getPayload(req);

  if (!rawPayload) {
    sendJson(res, 400, { message: "Invalid request body." });
    return;
  }

  const payload = {
    name: sanitizeText(rawPayload.name, 120),
    email: sanitizeText(rawPayload.email, 200).toLowerCase(),
    company: sanitizeText(rawPayload.company, 160),
    message: sanitizeText(rawPayload.message, 4000),
  };

  if (!payload.name || !payload.email || !payload.message) {
    sendJson(res, 400, { message: "Name, email, and message are required." });
    return;
  }

  if (!EMAIL_PATTERN.test(payload.email)) {
    sendJson(res, 400, { message: "Please enter a valid email address." });
    return;
  }

  const resendApiKey = getEnv("RESEND_API_KEY");
  const contactEmailFrom = getEnv("CONTACT_EMAIL_FROM");
  const contactEmailTo = getEnv("CONTACT_EMAIL_TO");
  const supabaseUrl = getEnv("SUPABASE_URL");
  const supabaseServiceRoleKey = getEnv("SUPABASE_SERVICE_ROLE_KEY");
  const supabaseLeadsTable = getEnv("SUPABASE_LEADS_TABLE") || DEFAULT_TABLE;

  const resendConfigured = Boolean(resendApiKey && contactEmailFrom && contactEmailTo);
  const supabaseConfigured = Boolean(supabaseUrl && supabaseServiceRoleKey);

  if (!resendConfigured && !supabaseConfigured) {
    sendJson(res, 503, {
      message:
        "The site is deployed, but automated contact delivery is not configured yet. Your email app will open as a fallback.",
      fallback: "mailto",
    });
    return;
  }

  const serviceResults = [];
  const serviceErrors = [];
  const metadata = {
    userAgent: req.headers["user-agent"] ?? "",
    origin: req.headers.origin ?? "",
    referer: req.headers.referer ?? "",
  };

  if (resendConfigured) {
    try {
      const resend = new Resend(resendApiKey);
      const companyLine = payload.company ? `Company: ${payload.company}` : "Company: Not provided";

      await resend.emails.send({
        from: contactEmailFrom,
        to: [contactEmailTo],
        replyTo: payload.email,
        subject: `New website enquiry from ${payload.name}`,
        text: [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          companyLine,
          "",
          payload.message,
        ].join("\n"),
      });

      serviceResults.push("resend");
    } catch (error) {
      serviceErrors.push(
        `Resend delivery failed: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  if (supabaseConfigured) {
    try {
      const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      });

      const { error } = await supabase
        .from(supabaseLeadsTable)
        .insert(toLeadRecord(payload, metadata));

      if (error) {
        throw error;
      }

      serviceResults.push("supabase");
    } catch (error) {
      serviceErrors.push(
        `Supabase logging failed: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  }

  if (serviceResults.length > 0) {
    sendJson(res, 200, {
      message: "Thanks for reaching out. Your message has been received.",
      services: serviceResults,
    });
    return;
  }

  sendJson(res, 502, {
    message: "We could not process your message with the configured services.",
    errors: serviceErrors,
  });
}
