import { motion } from 'framer-motion';
import { toolbox } from '../data/portfolio';

export default function Toolbox() {
  return (
    <section className="section-block" id="toolbox">
      <motion.p
        className="section-eyebrow"
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.p>
      <h2 className="section-headline">My Toolbox</h2>
      <div className="toolbox-grid">
        {toolbox.map((group, i) => (
          <motion.div
            key={group.category}
            className="toolbox-card"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <h3>{group.category}</h3>
            <p>{group.items.join(' · ')}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
