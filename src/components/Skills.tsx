import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionBackground from "@/components/SectionBackground";
import TypingText from "@/components/TypingText";

const skillCategories = [
  { title: "Programming Languages", skills: ["C", "Python", "Java"] },
  { title: "Web / Frontend", skills: ["HTML", "CSS", "JavaScript", "UI Design with Figma"] },
  { title: "Design & Creative Tools", skills: ["Adobe After Effects", "Canva", "Adobe Express"] },
];

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 border-t border-border relative">
      <SectionBackground variant="lines" />
      <div ref={ref} className={`max-w-6xl mx-auto px-6 transition-all duration-700 relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="section-heading text-center"><TypingText text="My " trigger={isVisible} /><span className="neon-gradient-heading"><TypingText text="Skills" trigger={isVisible} delay={400} /></span></h2>
        <p className="section-subheading text-center">Technologies and tools I work with</p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="bg-card rounded-lg p-6 card-hover multicolor-border">
              <h3 className="font-display font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
