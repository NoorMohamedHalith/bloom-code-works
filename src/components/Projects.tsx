import { Database, Mail, ShoppingCart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import trolleyPrototype from "@/assets/trolley-prototype.jpeg";
import SectionBackground from "@/components/SectionBackground";
import TypingText from "@/components/TypingText";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 border-t border-border relative">
      <SectionBackground variant="orbs" />
      <div ref={ref} className={`max-w-6xl mx-auto px-6 transition-all duration-700 relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="section-heading text-center"><span className="neon-gradient-heading"><TypingText text="Projects" trigger={isVisible} /></span></h2>
        <p className="section-subheading text-center">Things I've built</p>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-lg overflow-hidden card-hover multicolor-border">
            <div className="w-full overflow-hidden">
              <img src={trolleyPrototype} alt="Prototype of Advanced Automatic Bill Generating Trolley showing LCD display with item pricing" className="w-full h-56 object-cover" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-secondary neon-border">
                  <ShoppingCart size={22} className="text-neon-cyan" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Advanced Automatic Bill Generating Trolley
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                An automated shopping checkout system that calculates item-wise pricing, stores purchase data, and generates a final bill as a PDF delivered via email — reducing manual billing errors and checkout time.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Database size={16} className="text-neon-cyan mt-0.5 shrink-0" />
                  <span>Firebase for real-time data storage and retrieval</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Mail size={16} className="text-neon-magenta mt-0.5 shrink-0" />
                  <span>Automated email delivery with generated PDF bills</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "Firebase", "Email PDF"].map((tech) => (
                  <span key={tech} className="skill-tag text-xs">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
