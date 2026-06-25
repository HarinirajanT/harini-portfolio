import { motion, useTransform } from 'framer-motion';
import { evolution } from '../data/portfolio';

function EvolutionNode({ node, index, scrollYProgress, total }) {
  const start = index / total;
  const end = Math.min((index + 1) / total, start + 0.18);

  const opacity = useTransform(scrollYProgress, (p) => {
    if (p >= end) return 1;
    if (p <= start) return index === 0 ? 0.45 : 0.25;
    return 0.25 + ((p - start) / (end - start)) * 0.75;
  });

  const scale = useTransform(scrollYProgress, (p) => {
    if (p >= end) return 1;
    if (p <= start) return 0.88;
    return 0.88 + ((p - start) / (end - start)) * 0.12;
  });

  const glow = useTransform(scrollYProgress, (p) => (p >= start ? Math.min(1, (p - start) / 0.12) : 0));

  return (
    <div className="evolution-node-wrap" style={{ '--i': index }}>
      {index > 0 && <div className="evolution-connector" />}
      <motion.div className="evolution-node" style={{ opacity, scale }}>
        <motion.span className="node-ring" style={{ opacity: glow }} />
        <span className="node-dot" />
        <span className="node-label">{node.label}</span>
      </motion.div>
    </div>
  );
}

export default function EvolutionPath({ scrollYProgress }) {
  return (
    <div className="evolution-path">
      {evolution.map((node, index) => (
        <EvolutionNode
          key={node.id}
          node={node}
          index={index}
          scrollYProgress={scrollYProgress}
          total={evolution.length}
        />
      ))}
    </div>
  );
}
