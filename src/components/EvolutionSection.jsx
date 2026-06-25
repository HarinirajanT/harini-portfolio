import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import EvolutionPath from './EvolutionNode';

export default function EvolutionSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  return (
    <section className="evolution" id="journey" ref={ref}>
      <div className="evolution-sticky">
        <motion.p
          className="section-eyebrow"
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
        >
          Growth Journey
        </motion.p>
        <h2 className="section-headline">How I&apos;ve Grown</h2>
        <p className="section-subline">Scroll to trace each chapter</p>
        <EvolutionPath scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}
