import { useState, useEffect } from "react";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    const holdTimer = setTimeout(() => setPhase("hold"), 100);
    const exitTimer = setTimeout(() => setPhase("exit"), 2200);
    const doneTimer = setTimeout(onComplete, 2800);
    return () => { clearTimeout(holdTimer); clearTimeout(exitTimer); clearTimeout(doneTimer); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${phase === "exit" ? "opacity-0" : "opacity-100"}`}
    >
      {/* Glowing orbs */}
      <div className="absolute w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: "hsl(190 100% 50%)", top: "20%", left: "15%" }} />
      <div className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "hsl(310 100% 60%)", bottom: "10%", right: "10%" }} />

      <div className="relative flex flex-col items-center gap-6">
        {/* Animated ring */}
        <div className={`relative w-24 h-24 transition-all duration-700 ${phase === "enter" ? "scale-0 rotate-180" : "scale-100 rotate-0"}`}>
          <div className="absolute inset-0 rounded-full border-2 border-transparent animate-spin" style={{
            borderImage: "linear-gradient(135deg, hsl(190 100% 50%), hsl(310 100% 60%), hsl(270 100% 65%), hsl(220 100% 60%)) 1",
            animationDuration: "2s",
          }} />
          <svg viewBox="0 0 100 100" className="w-full h-full animate-spin" style={{ animationDuration: "2s" }}>
            <defs>
              <linearGradient id="splash-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(190 100% 50%)" />
                <stop offset="50%" stopColor="hsl(310 100% 60%)" />
                <stop offset="100%" stopColor="hsl(270 100% 65%)" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="44" fill="none" stroke="url(#splash-grad)" strokeWidth="2" strokeDasharray="200 80" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display font-bold text-2xl neon-gradient-heading">N</span>
          </div>
        </div>

        {/* Name */}
        <div className={`transition-all duration-700 delay-300 ${phase === "enter" ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
          <h1 className="font-display font-bold text-xl tracking-wider text-foreground">
            Noor Mohamed Halith R
          </h1>
          <div className={`h-px mx-auto mt-2 bg-gradient-to-r from-transparent via-neon-cyan to-transparent transition-all duration-700 delay-500 ${phase === "enter" ? "w-0" : "w-full"}`} />
        </div>

        {/* Loading dots */}
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
