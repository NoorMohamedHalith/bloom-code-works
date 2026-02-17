import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-[9999] flex items-center justify-center transition-all duration-500 group ${
        visible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-8 scale-75 pointer-events-none"
      }`}
      style={{ width: 56, height: 56 }}
    >
      {/* Animated rotating border ring */}
      <span
        className="absolute inset-0 animate-spin"
        style={{
          animationDuration: "4s",
          background:
            "conic-gradient(from 0deg, hsl(var(--neon-cyan)), hsl(var(--neon-magenta)), hsl(var(--neon-purple)), hsl(var(--neon-blue)), hsl(var(--neon-cyan)))",
          clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        }}
      />
      {/* Inner hexagon background */}
      <span
        className="absolute flex items-center justify-center"
        style={{
          inset: 3,
          background: "hsl(var(--background))",
          clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
        }}
      />
      {/* Glow pulse */}
      <span
        className="absolute inset-[-6px] animate-pulse opacity-60"
        style={{
          animationDuration: "2s",
          background:
            "conic-gradient(from 180deg, hsl(var(--neon-cyan) / 0.4), hsl(var(--neon-magenta) / 0.3), hsl(var(--neon-purple) / 0.3), transparent)",
          clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
          filter: "blur(8px)",
        }}
      />
      {/* Icon */}
      <ArrowUp
        size={22}
        className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1"
        style={{
          color: "hsl(var(--neon-cyan))",
          filter: "drop-shadow(0 0 6px hsl(var(--neon-cyan) / 0.8))",
        }}
      />
    </button>
  );
};

export default BackToTop;
