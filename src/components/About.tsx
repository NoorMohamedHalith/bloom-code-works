import { GraduationCap, Target, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionBackground from "@/components/SectionBackground";
import TypingText from "@/components/TypingText";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      <SectionBackground variant="orbs" />
      <div ref={ref} className={`max-w-6xl mx-auto px-6 transition-all duration-700 relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="section-heading text-center"><TypingText text="About " trigger={isVisible} /><span className="neon-gradient-heading"><TypingText text="Me" trigger={isVisible} delay={500} /></span></h2>
        <p className="section-subheading text-center">Getting to know me better</p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              I'm a pre-final year B.Tech Information Technology student at IFET College of Engineering with a strong passion for building things on the web. I enjoy translating ideas into clean, functional user interfaces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey includes internships in Django development, AWS fundamentals, and UI/UX design — each giving me practical, real-world experience. I believe in learning by doing, and every project I take on pushes me closer to becoming a well-rounded frontend and full-stack developer.
            </p>
          </div>

          <div className="space-y-6">
            {[
              { icon: GraduationCap, title: "Education", lines: ["B.Tech in Information Technology", "IFET College of Engineering · Expected 2027"] },
              { icon: Target, title: "Goal", lines: ["Growing into a skilled frontend & full-stack developer through hands-on projects and internships."] },
              { icon: Lightbulb, title: "Approach", lines: ["Practical learning, clean design, and user-centered thinking."] },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="p-3 rounded-lg bg-secondary neon-border shrink-0">
                  <item.icon size={22} className="text-neon-cyan" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                  {item.lines.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
