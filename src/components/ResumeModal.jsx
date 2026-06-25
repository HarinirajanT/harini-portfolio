import { useEffect } from 'react';
import { motion } from 'framer-motion';

const resumeUrl = `${import.meta.env.BASE_URL}harini-resume.pdf`;

export default function ResumeModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <motion.div
      className="modal-overlay resume-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-panel resume-modal"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-modal-header">
          <h2>Resume</h2>
          <div className="resume-modal-actions">
            <a
              href={resumeUrl}
              download="Harini_T_Resume.pdf"
              className="btn btn-ghost btn-sm"
            >
              Download PDF
            </a>
            <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
        </div>

        <div className="resume-viewer">
          <iframe
            src={resumeUrl}
            title="Harini T Resume"
            className="resume-pdf"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
