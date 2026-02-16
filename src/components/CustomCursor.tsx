import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      if (cursorRef.current && trailRef.current) {
        cursorRef.current.style.left = `${pos.current.x}px`;
        cursorRef.current.style.top = `${pos.current.y}px`;

        trailPos.current.x += (pos.current.x - trailPos.current.x) * 0.15;
        trailPos.current.y += (pos.current.y - trailPos.current.y) * 0.15;
        trailRef.current.style.left = `${trailPos.current.x}px`;
        trailRef.current.style.top = `${trailPos.current.y}px`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full hidden md:block"
        style={{
          background: "radial-gradient(circle, hsl(190 100% 50% / 0.25), transparent 70%)",
          boxShadow: "0 0 20px hsl(190 100% 50% / 0.3), 0 0 60px hsl(310 100% 60% / 0.15)",
        }}
      />
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full hidden md:block"
        style={{
          background: "hsl(190 100% 50%)",
          boxShadow: "0 0 8px hsl(190 100% 50% / 0.8), 0 0 20px hsl(190 100% 50% / 0.4)",
        }}
      />
    </>
  );
};

export default CustomCursor;
