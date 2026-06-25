import { motion } from 'framer-motion';
import { projects, research } from '../data/portfolio';

export default function Projects() {
  return (
    <section className="section-block section-alt" id="projects">
      <motion.p
        className="section-eyebrow"
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true }}
      >
        Built & Published
      </motion.p>
      <h2 className="section-headline">Projects & Research</h2>

      <div className="card-grid">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="glass-card project-card"
            initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            whileHover={{ y: -6 }}
          >
            <div className="glass-card-inner">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="card-highlights">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.a
        href={research.link}
        target="_blank"
        rel="noopener noreferrer"
        className="research-card"
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
      >
        <span className="research-badge">IEEE · ICDSAAI 2025</span>
        <h3>{research.title}</h3>
        <p>{research.description}</p>
        <span className="project-link">Read paper on IEEE Xplore ↗</span>
      </motion.a>
    </section>
  );
}
