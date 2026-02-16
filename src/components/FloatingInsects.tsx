import { useEffect, useRef } from "react";

const FloatingInsects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const insects: HTMLDivElement[] = [];
    const colors = [
      "hsl(190 100% 50%)",
      "hsl(310 100% 60%)",
      "hsl(270 100% 65%)",
      "hsl(220 100% 60%)",
      "hsl(150 100% 50%)",
    ];

    for (let i = 0; i < 12; i++) {
      const insect = document.createElement("div");
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = 4 + Math.random() * 6;

      insect.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${color};
        box-shadow: 0 0 ${size * 2}px ${color}, 0 0 ${size * 4}px ${color.replace(")", " / 0.4)")};
        pointer-events: none;
        z-index: 1;
        opacity: 0.6;
        transition: none;
      `;

      // Random starting position
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      let vx = (Math.random() - 0.5) * 1.5;
      let vy = (Math.random() - 0.5) * 1.5;
      let angle = Math.random() * Math.PI * 2;
      const turnSpeed = 0.02 + Math.random() * 0.03;
      const speed = 0.5 + Math.random() * 1;

      insect.style.left = `${x}px`;
      insect.style.top = `${y}px`;

      container.appendChild(insect);
      insects.push(insect);

      // Store movement data
      (insect as any).__data = { x, y, vx, vy, angle, turnSpeed, speed };
    }

    let animId: number;
    const animate = () => {
      insects.forEach((insect) => {
        const d = (insect as any).__data;
        // Slightly change direction randomly (insect-like erratic movement)
        d.angle += (Math.random() - 0.5) * d.turnSpeed * 10;
        d.vx = Math.cos(d.angle) * d.speed;
        d.vy = Math.sin(d.angle) * d.speed;

        d.x += d.vx;
        d.y += d.vy;

        // Bounce off edges
        if (d.x < 0 || d.x > window.innerWidth) {
          d.angle = Math.PI - d.angle;
          d.x = Math.max(0, Math.min(window.innerWidth, d.x));
        }
        if (d.y < 0 || d.y > window.innerHeight) {
          d.angle = -d.angle;
          d.y = Math.max(0, Math.min(window.innerHeight, d.y));
        }

        insect.style.left = `${d.x}px`;
        insect.style.top = `${d.y}px`;
      });
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      insects.forEach((i) => i.remove());
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[1]" />;
};

export default FloatingInsects;
