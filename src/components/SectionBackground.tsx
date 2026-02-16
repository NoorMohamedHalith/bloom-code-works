const SectionBackground = ({ variant = "dots" }: { variant?: "dots" | "lines" | "orbs" }) => {
  if (variant === "orbs") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, hsl(190 100% 50%), transparent 70%)" }} />
        <div className="absolute -bottom-48 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, hsl(310 100% 60%), transparent 70%)" }} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, hsl(270 100% 65%), transparent 70%)" }} />
      </div>
    );
  }

  if (variant === "lines") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-magenta/20 to-transparent" />
        {/* Scan line effect */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(190 100% 50% / 0.1) 2px, hsl(190 100% 50% / 0.1) 4px)",
          }}
        />
        {/* Corner decorations */}
        <div className="absolute top-6 left-6 w-16 h-16 border-l border-t border-neon-cyan/20" />
        <div className="absolute top-6 right-6 w-16 h-16 border-r border-t border-neon-cyan/20" />
        <div className="absolute bottom-6 left-6 w-16 h-16 border-l border-b border-neon-magenta/20" />
        <div className="absolute bottom-6 right-6 w-16 h-16 border-r border-b border-neon-magenta/20" />
      </div>
    );
  }

  // dots
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(hsl(190 100% 50%) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-1/3 -left-20 w-40 h-40 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, hsl(220 100% 60%), transparent 70%)" }} />
      <div className="absolute bottom-1/4 -right-20 w-48 h-48 rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, hsl(190 100% 50%), transparent 70%)" }} />
    </div>
  );
};

export default SectionBackground;
