import { Code, Palette } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionBackground from "@/components/SectionBackground";
import TypingText from "@/components/TypingText";

const services = [
  {
    icon: Code,
    title: "Frontend Web Development",
    desc: "Building responsive websites using HTML, CSS, and JavaScript with a focus on clean layout, usability, and responsiveness.",
    color: "cyan" as const,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Wireframes and interface designs using Figma, including app UI concepts inspired by real-world applications.",
    color: "magenta" as const,
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 border-t border-border relative">
      <SectionBackground variant="lines" />
      <div ref={ref} className={`max-w-6xl mx-auto px-6 transition-all duration-700 relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="section-heading text-center"><span className="neon-gradient-heading"><TypingText text="Services" trigger={isVisible} /></span></h2>
        <p className="section-subheading text-center">What I can help with</p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-lg p-6 card-hover multicolor-border">
              <div className={`p-3 rounded-lg bg-secondary w-fit mb-4 ${s.color === "cyan" ? "neon-border" : "neon-glow-magenta border border-neon-magenta/30"}`}>
                <s.icon size={24} className={s.color === "cyan" ? "text-neon-cyan" : "text-neon-magenta"} />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
