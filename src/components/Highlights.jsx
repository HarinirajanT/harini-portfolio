import { motion } from 'framer-motion';
import { highlights } from '../data/portfolio';

export default function Highlights() {
  return (
    <section className="section-block section-alt" id="highlights">
      <motion.p
        className="section-eyebrow"
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true }}
      >
        Achievements
      </motion.p>
      <h2 className="section-headline">Highlights</h2>
      <div className="highlights-grid">
        {highlights.map((item, i) => {
          const Tag = item.link ? 'a' : 'div';
          const linkProps = item.link
            ? { href: item.link, target: '_blank', rel: 'noopener noreferrer' }
            : {};

          return (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <Tag className={`highlight-item${item.link ? ' highlight-link' : ''}`} {...linkProps}>
                <span className="highlight-icon">{item.icon}</span>
                <span>{item.text}</span>
              </Tag>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
