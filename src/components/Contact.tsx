import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
  Loader2,
} from 'lucide-react';

const CONTACT_EMAIL = 'contact@eightymile.co';

type SubmitState = 'idle' | 'success' | 'fallback' | 'error';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const resetStatus = () => {
    setSubmitState('idle');
    setStatusMessage('');
  };

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(`New enquiry from ${formState.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${formState.name}`,
        `Email: ${formState.email}`,
        `Company: ${formState.company || 'Not provided'}`,
        '',
        formState.message,
      ].join('\n')
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    resetStatus();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const payload = (await response.json().catch(() => null)) as
        | { message?: string; fallback?: string }
        | null;

      if (response.ok) {
        setSubmitState('success');
        setStatusMessage(payload?.message ?? 'Your message has been sent successfully.');
        setFormState({ name: '', email: '', company: '', message: '' });
        return;
      }

      if (response.status === 503 || payload?.fallback === 'mailto') {
        openMailtoFallback();
        setSubmitState('fallback');
        setStatusMessage(
          payload?.message ??
            'Email delivery is not configured yet, so your mail app has been opened instead.'
        );
        setFormState({ name: '', email: '', company: '', message: '' });
        return;
      }

      setSubmitState('error');
      setStatusMessage(
        payload?.message ?? 'We could not send your message right now. Please try again shortly.'
      );
    } catch (_error) {
      openMailtoFallback();
      setSubmitState('fallback');
      setStatusMessage(
        'The local API is unavailable right now, so your mail app has been opened as a fallback.'
      );
      setFormState({ name: '', email: '', company: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (submitState !== 'idle') {
      resetStatus();
    }

    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-[#f8f6f1]">
      <div className="content-shell" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-intro"
        >
          <span className="section-kicker">Contact Us</span>
          <h2 className="section-title">
            Let&apos;s shape your next
            <span className="gradient-text"> digital signature.</span>
          </h2>
          <p className="section-copy">
            Ready to discuss your project? Tell us what you want to build and we&apos;ll help shape
            the right system, experience, and visual direction.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-2"
          >
            <div className="theme-panel rounded-[2rem] p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium uppercase tracking-[0.14em] text-[#d4b26a]"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-[#1f2937]/8 bg-white px-4 py-3 text-[#20242c] transition-colors duration-300 focus:border-[#d4b26a] focus:outline-none"
                    placeholder="Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium uppercase tracking-[0.14em] text-[#d4b26a]"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-[#1f2937]/8 bg-white px-4 py-3 text-[#20242c] transition-colors duration-300 focus:border-[#d4b26a] focus:outline-none"
                    placeholder="mail@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium uppercase tracking-[0.14em] text-[#d4b26a]"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[#1f2937]/8 bg-white px-4 py-3 text-[#20242c] transition-colors duration-300 focus:border-[#d4b26a] focus:outline-none"
                    placeholder="Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium uppercase tracking-[0.14em] text-[#d4b26a]"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-[#1f2937]/8 bg-white px-4 py-3 text-[#20242c] transition-colors duration-300 focus:border-[#d4b26a] focus:outline-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : submitState === 'success' ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>

                {submitState !== 'idle' ? (
                  <div
                    className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm ${
                      submitState === 'error'
                        ? 'border-red-400/30 bg-red-500/10 text-red-200'
                        : 'border-[#d4b26a]/30 bg-[#d4b26a]/10 text-[#e3cf9c]'
                    }`}
                  >
                    {submitState === 'error' ? (
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    ) : (
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    )}
                    <p className="leading-6">{statusMessage}</p>
                  </div>
                ) : null}
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 space-y-8 lg:order-1"
          >
            <div className="theme-panel rounded-[2rem] p-8 md:p-10">
              <h3 className="serif-display mb-6 text-4xl font-semibold text-[#20242c]">Get in Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
                    <Mail className="h-6 w-6 text-[#d4b26a]" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-[#20242c]">Primary Email</p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-[#5d6574] transition-colors duration-300 hover:text-[#20242c]"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
                    <Mail className="h-6 w-6 text-[#d4b26a]" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-[#20242c]">Secondary Email</p>
                    <a
                      href="mailto:eightymileinfo@gmail.com"
                      className="text-[#5d6574] transition-colors duration-300 hover:text-[#20242c]"
                    >
                      eightymileinfo@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
                    <Phone className="h-6 w-6 text-[#d4b26a]" />
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-[#20242c]">Phone</p>
                    <a
                      href="tel:+919551758115"
                      className="text-[#5d6574] transition-colors duration-300 hover:text-[#20242c]"
                    >
                      Eighty Miles: +91 9551758115
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="theme-panel rounded-[2rem] p-8 md:p-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
                  <MapPin className="h-6 w-6 text-[#d4b26a]" />
                </div>
                <div>
                  <h3 className="serif-display mb-2 text-3xl font-semibold text-[#20242c]">
                    Our Presence
                  </h3>
                  <p className="leading-8 text-[#5d6574]">
                    Chennai | Coimbatore | Bangalore | Hyderabad | UAE | UK | Germany
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
