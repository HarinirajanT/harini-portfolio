import { useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';

const initialForm = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitViaMailto = () => {
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus('success');
    setForm(initialForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    if (!accessKey) {
      submitViaMailto();
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio message from ${form.name}`,
          from_name: 'Harini Portfolio',
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send message.');
      }

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <motion.div
      className="contact-form-wrap"
      initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact-form-panel">
        <p className="contact-form-eyebrow">Send a message</p>
        <h3 className="contact-form-title">Get in touch</h3>
        <p className="contact-form-sub">
          Have a project, internship, or collaboration in mind? Drop a message and I&apos;ll get back to you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="checkbox" name="botcheck" className="contact-honeypot" tabIndex={-1} autoComplete="off" />

          <div className="contact-form-row">
            <label className="contact-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                minLength={2}
                disabled={status === 'sending'}
              />
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                required
                disabled={status === 'sending'}
              />
            </label>
          </div>

          <label className="contact-field">
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your idea, role, or opportunity..."
              rows={5}
              required
              minLength={10}
              disabled={status === 'sending'}
            />
          </label>

          <button type="submit" className="btn btn-primary contact-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' ? (
            <p className="contact-form-feedback contact-form-success">
              {accessKey
                ? 'Message sent! I’ll get back to you soon.'
                : 'Your email app should open — send the message from there.'}
            </p>
          ) : null}

          {status === 'error' ? (
            <p className="contact-form-feedback contact-form-error">{errorMessage}</p>
          ) : null}
        </form>
      </div>
    </motion.div>
  );
}
