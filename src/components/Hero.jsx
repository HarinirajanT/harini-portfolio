import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/portfolio';
import AboutModal from './AboutModal';
import ResumeModal from './ResumeModal';
import InteractiveSphere from './InteractiveSphere';
import ScrollIndicator from './ScrollIndicator';

export default function Hero() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const brightness = useTransform(scrollYProgress, [0, 1], [0, 0.15]);

  return (
    <section className="hero" id="hero" ref={ref}>
      <motion.div className="hero-brighten" style={{ opacity: brightness }} />
      <div className="hero-split">
        <motion.div className="hero-left" style={{ y, opacity }}>
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {profile.greeting}
          </motion.p>
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 24, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            {profile.name}
          </motion.h1>
          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            {profile.tagline}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <a href="#work" className="btn btn-primary">
              See My Work
            </a>
            <button type="button" className="btn btn-outline" onClick={() => setAboutOpen(true)}>
              About
            </button>
            <button type="button" className="btn btn-ghost" onClick={() => setResumeOpen(true)}>
              Resume ↓
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(16px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <InteractiveSphere />
        </motion.div>
      </div>
      <ScrollIndicator />
      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
