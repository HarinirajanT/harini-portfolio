import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const resumeUrl = `${import.meta.env.BASE_URL}harini-resume.pdf`;

export default function ResumeModal({ open, onClose }) {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(800);

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

  useEffect(() => {
    if (!open) return undefined;
    const updateWidth = () => {
      setPageWidth(Math.min(860, window.innerWidth - 48));
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [open]);

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
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              Open PDF
            </a>
            <a
              href={resumeUrl}
              download="Harini_T_Resume.pdf"
              className="btn btn-ghost btn-sm"
            >
              Download
            </a>
            <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
        </div>

        <div className="resume-viewer">
          <Document
            file={resumeUrl}
            onLoadSuccess={({ numPages: pages }) => setNumPages(pages)}
            loading={<p className="resume-loading">Loading resume…</p>}
            error={
              <div className="resume-error">
                <p>Could not load the PDF in this browser.</p>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Open resume PDF
                </a>
              </div>
            }
          >
            {Array.from({ length: numPages || 0 }, (_, index) => (
              <Page
                key={`page-${index + 1}`}
                pageNumber={index + 1}
                width={pageWidth}
                className="resume-page"
              />
            ))}
          </Document>
        </div>
      </motion.div>
    </motion.div>
  );
}
