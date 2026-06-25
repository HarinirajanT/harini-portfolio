import { motion } from 'framer-motion';
import { whatIDo } from '../data/portfolio';

export default function WhatIDo() {
  return (
    <section className="section-block" id="work">
      <motion.p
        className="section-eyebrow"
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true }}
      >
        What I Do
      </motion.p>
      <h2 className="section-headline">What I Do</h2>
      <div className="card-grid">
        {whatIDo.map((item, i) => (
          <motion.article
            key={item.title}
            className="glass-card"
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.12, duration: 0.7 }}
            whileHover={{ y: -8, rotateX: 4, rotateY: 4, transition: { duration: 0.3 } }}
          >
            <div className="glass-card-inner">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="card-highlights">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
