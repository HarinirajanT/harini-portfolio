import GridBackground from './components/GridBackground';
import CommandMenu from './components/CommandMenu';
import Hero from './components/Hero';
import EvolutionSection from './components/EvolutionSection';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import WhereILearned from './components/WhereILearned';
import Toolbox from './components/Toolbox';
import CoreStrengths from './components/CoreStrengths';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import useCommandMenu from './hooks/useCommandMenu';

export default function App() {
  const { open, close, toggle } = useCommandMenu();

  return (
    <>
      <GridBackground />
      <button type="button" className="command-trigger" onClick={toggle} aria-label="Open command menu">
        <kbd>⌘</kbd>K
      </button>
      <CommandMenu open={open} onClose={close} />
      <Hero />
      <EvolutionSection />
      <WhatIDo />
      <Projects />
      <WhereILearned />
      <Toolbox />
      <CoreStrengths />
      <Highlights />
      <Contact />
    </>
  );
}
