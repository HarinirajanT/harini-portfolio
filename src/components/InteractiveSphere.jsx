import { useEffect, useRef } from 'react';

export default function InteractiveSphere() {
  const sphereRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const rect = sphereRef.current?.parentElement?.getBoundingClientRect();
      if (!rect) return;
      target.current = {
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 40,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 40,
      };
    };

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.06;
      current.current.y += (target.current.y - current.current.y) * 0.06;
      if (sphereRef.current) {
        sphereRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div className="sphere-wrap">
      <div ref={sphereRef} className="sphere">
        <div className="sphere-core" />
        <div className="sphere-glow sphere-glow-1" />
        <div className="sphere-glow sphere-glow-2" />
        <div className="sphere-glow sphere-glow-3" />
      </div>
    </div>
  );
}
