import { motion } from 'framer-motion';
import { coreStrengths } from '../data/portfolio';

export default function CoreStrengths() {
  return (
    <section className="section-block section-alt" id="strengths">
      <motion.p
        className="section-eyebrow"
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true }}
      >
        Skills & Professional Growth
      </motion.p>
      <h2 className="section-headline">Core Strengths</h2>
      <motion.div
        className="strengths-panel"
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ul className="strengths-list">
          {coreStrengths.map((strength, i) => (
            <motion.li
              key={strength}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.35 }}
            >
              {strength}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
