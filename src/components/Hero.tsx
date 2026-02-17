import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import profileImg from "@/assets/profile.png";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const particleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particleContainerRef.current;
    if (!container) return;
    const particles: HTMLDivElement[] = [];
    const colors = [
      "hsl(190 100% 50% / 0.5)",
      "hsl(310 100% 60% / 0.4)",
      "hsl(270 100% 65% / 0.4)",
      "hsl(220 100% 60% / 0.4)",
    ];
    for (let i = 0; i < 35; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100 + 100}%`;
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.width = `${2 + Math.random() * 3}px`;
      p.style.height = p.style.width;
      p.style.animationDuration = `${8 + Math.random() * 12}s`;
      p.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(p);
      particles.push(p);
    }
    return () => particles.forEach((p) => p.remove());
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden cyberpunk-grid">
      {/* Parallax background layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, hsl(var(--neon-cyan)), transparent 70%)" }} />
        <div className="absolute top-1/3 right-1/6 w-80 h-80 rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, hsl(var(--neon-magenta)), transparent 70%)" }} />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, hsl(var(--neon-purple)), transparent 70%)" }} />
      </div>
      <div ref={particleContainerRef} className="absolute inset-0 overflow-hidden pointer-events-none" style={{ transform: `translateY(${scrollY * 0.1}px)` }} />
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className="neon-text font-medium text-sm tracking-wider uppercase">Hello, I'm</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Noor Mohamed</span><br />
              <span className="neon-gradient-heading">Halith R</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Frontend & UI/UX Developer <span className="neon-text-magenta">|</span> B.Tech IT Student
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Pre-final year Information Technology student at IFET College of Engineering with hands-on experience in C, Python, Java, and frontend web technologies. I design clean, user-centered interfaces using Figma and build functional web applications — growing toward becoming a full-stack developer.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={() => scrollTo("projects")} className="neon-btn multicolor-border">
                View Projects
              </button>
              <button onClick={() => scrollTo("contact")} className="neon-btn-outline multicolor-border">
                Contact Me
              </button>
              <a href="/resume.pdf" download className="neon-btn-outline multicolor-border flex items-center gap-2">
                <Download size={16} />
                Resume
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/NoorMohamedHalith" target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/noor-mohamed-halith" target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 mt-12 md:mt-24">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden multicolor-border neon-glow">
              <img src={profileImg} alt="Noor Mohamed Halith R" className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button onClick={() => scrollTo("about")} className="animate-bounce text-muted-foreground hover:text-neon-cyan transition-colors">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
