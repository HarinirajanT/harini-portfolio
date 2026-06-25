import { motion } from 'framer-motion';
import { internships } from '../data/portfolio';

export default function WhereILearned() {
  return (
    <section className="section-block section-alt" id="learned">
      <motion.p
        className="section-eyebrow"
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true }}
      >
        Industry Experience
      </motion.p>
      <h2 className="section-headline">Where I&apos;ve Learned</h2>
      <div className="card-grid">
        {internships.map((item, i) => (
          <motion.article
            key={item.company}
            className="glass-card internship-card"
            initial={{ opacity: 0, y: 36, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
          >
            <div className="glass-card-inner">
              <p className="internship-company">{item.company}</p>
              <h3>{item.role}</h3>
              <p className="internship-period">{item.period}</p>
              <p className="internship-summary">{item.summary}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
