import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';

export default function AboutModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-panel about-modal"
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <h3>About Me</h3>
        <p className="about-modal-summary">{profile.about.summary}</p>
        <p className="about-modal-label">What I focus on</p>
        <ul className="about-modal-list">
          {profile.about.focus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="about-modal-edu">{profile.about.educationNote}</p>
      </motion.div>
    </motion.div>
  );
}
