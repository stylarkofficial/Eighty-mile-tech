# Eighty Mile Tech

Marketing site for Eighty Mile Tech, built with React, Vite, and Tailwind CSS, with a Vercel-ready contact API.

## Local development

```bash
npm install
npm run dev
```

If the Vercel API is not running locally, the contact form falls back to the user's mail app instead of failing.

## Build

```bash
npm run build
```

## Vercel environment variables

Set these in Vercel before enabling automated contact delivery:

- `CONTACT_EMAIL_TO`
- `CONTACT_EMAIL_FROM`
- `RESEND_API_KEY`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_LEADS_TABLE` optional, defaults to `contact_leads`

Resend can be enabled on its own for email delivery. Supabase can be enabled on its own for lead logging. If neither is configured, the site still deploys cleanly and the contact form opens a `mailto:` fallback.

## Suggested Supabase table

```sql
create table if not exists public.contact_leads (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  company text,
  message text not null,
  source text not null default 'website',
  submitted_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb
);
```

## Deployment

```bash
vercel --prod
```
