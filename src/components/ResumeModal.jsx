import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile, resume } from '../data/portfolio';

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
          <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="resume-body">
          <header className="resume-top">
            <h1>{profile.name}</h1>
            <p>
              {profile.location} · {profile.phone} ·{' '}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
            <p className="resume-links">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              {' · '}
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </header>

          <section>
            <h3>Education</h3>
            <p className="resume-bold">{resume.education.degree}</p>
            <p>{resume.education.school}</p>
            <p className="resume-muted">
              {resume.education.period} · CGPA {resume.education.cgpa}
            </p>
          </section>

          <section>
            <h3>Experience</h3>
            {resume.experience.map((job) => (
              <div className="resume-block" key={job.company}>
                <p className="resume-bold">
                  {job.role} — {job.company}
                </p>
                <p className="resume-muted">{job.period}</p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <h3>Projects</h3>
            {resume.projectList.map((project) => (
              <div className="resume-block" key={project.name}>
                <p className="resume-bold">{project.name}</p>
                <p className="resume-muted">{project.detail}</p>
              </div>
            ))}
          </section>

          <section>
            <h3>Technical Skills</h3>
            <ul className="resume-skills">
              {resume.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Certifications</h3>
            <ul>
              {resume.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3>Achievements</h3>
            <ul>
              {resume.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </motion.div>
    </motion.div>
  );
}
