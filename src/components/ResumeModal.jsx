import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const resumeUrl = `${import.meta.env.BASE_URL}harini-resume.pdf`;
const MIN_ZOOM = 0.6;
const MAX_ZOOM = 2;
const ZOOM_STEP = 0.15;

export default function ResumeModal({ open, onClose }) {
  const viewerRef = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(() => {
    if (typeof window === 'undefined') return 1000;
    return Math.max(600, Math.min(window.innerWidth * 0.95, 1200) - 48);
  });
  const [zoom, setZoom] = useState(1);

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
    if (!open) {
      setPageNumber(1);
      setZoom(1);
      setNumPages(null);
    }
  }, [open]);

  useLayoutEffect(() => {
    if (!open) return undefined;

    const updateWidth = () => {
      const viewportWidth = window.innerWidth;
      const modalWidth = Math.min(viewportWidth * 0.95, 1200);
      const contentWidth = modalWidth - 48;
      setContainerWidth(Math.max(600, contentWidth));
    };

    updateWidth();
    const timer = window.setTimeout(updateWidth, 100);
    window.addEventListener('resize', updateWidth);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('resize', updateWidth);
    };
  }, [open]);

  const pageWidth = Math.round(containerWidth * zoom);

  const zoomIn = useCallback(() => {
    setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2)));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom((z) => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2)));
  }, []);

  const resetZoom = useCallback(() => setZoom(1), []);

  const goPrev = useCallback(() => {
    setPageNumber((p) => Math.max(1, p - 1));
  }, []);

  const goNext = useCallback(() => {
    setPageNumber((p) => (numPages ? Math.min(numPages, p + 1) : p));
  }, [numPages]);

  if (!open) return null;

  return (
    <motion.div
      className="modal-overlay resume-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        className="resume-modal"
        style={{ width: '95vw', maxWidth: 1200, height: '95vh' }}
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="resume-modal-header">
          <div className="resume-header-left">
            <h2>Resume</h2>
            {numPages ? (
              <span className="resume-page-indicator">
                Page {pageNumber} of {numPages}
              </span>
            ) : null}
          </div>

          <div className="resume-modal-actions">
            <div className="resume-zoom-controls" aria-label="Zoom controls">
              <button type="button" className="resume-icon-btn" onClick={zoomOut} aria-label="Zoom out">
                −
              </button>
              <button type="button" className="resume-zoom-label" onClick={resetZoom}>
                {Math.round(zoom * 100)}%
              </button>
              <button type="button" className="resume-icon-btn" onClick={zoomIn} aria-label="Zoom in">
                +
              </button>
            </div>

            {numPages && numPages > 1 ? (
              <div className="resume-page-controls" aria-label="Page navigation">
                <button
                  type="button"
                  className="resume-icon-btn"
                  onClick={goPrev}
                  disabled={pageNumber <= 1}
                  aria-label="Previous page"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="resume-icon-btn"
                  onClick={goNext}
                  disabled={pageNumber >= numPages}
                  aria-label="Next page"
                >
                  ›
                </button>
              </div>
            ) : null}

            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              Open in New Tab
            </a>
            <a
              href={resumeUrl}
              download="Harini_T_Resume.pdf"
              className="btn btn-primary btn-sm"
            >
              Download
            </a>
            <button type="button" className="modal-close resume-close" onClick={onClose} aria-label="Close">
              ✕
            </button>
          </div>
        </header>

        <div className="resume-viewer" ref={viewerRef}>
          <Document
            file={resumeUrl}
            onLoadSuccess={({ numPages: pages }) => {
              setNumPages(pages);
              setPageNumber(1);
            }}
            loading={<p className="resume-loading">Loading resume…</p>}
            error={
              <div className="resume-error">
                <p>Could not load the PDF in this browser.</p>
                <a href={resumeUrl} download="Harini_T_Resume.pdf" className="btn btn-primary">
                  Download resume
                </a>
              </div>
            }
          >
            <Page
              key={`${pageNumber}-${pageWidth}`}
              pageNumber={pageNumber}
              width={pageWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              className="resume-page"
            />
          </Document>
        </div>
      </motion.div>
    </motion.div>
  );
}
