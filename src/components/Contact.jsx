import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import ContactForm from './ContactForm';

const links = [
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    icon: 'in',
    display: 'LinkedIn Profile',
  },
  {
    label: 'GitHub',
    href: profile.github,
    icon: '{ }',
    display: 'GitHub Profile',
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    icon: '✉',
    display: profile.email,
  },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.h2
        className="contact-headline"
        initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Have an idea?
        <br />
        <span>Let&apos;s build it together.</span>
      </motion.h2>

      <ContactForm />

      <div className="contact-cards">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="contact-link-card"
            target={link.label !== 'Email' ? '_blank' : undefined}
            rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 * i, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <span className="contact-icon-btn">{link.icon}</span>
            <span className="contact-link-label">{link.label}</span>
            <span className="contact-link-value">{link.display}</span>
          </motion.a>
        ))}
      </div>

      <p className="contact-phone">{profile.phone} · {profile.location}</p>
      <p className="contact-footer">© {new Date().getFullYear()} {profile.name}</p>
    </section>
  );
}
