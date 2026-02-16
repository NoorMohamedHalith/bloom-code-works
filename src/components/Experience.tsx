import { Briefcase, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionBackground from "@/components/SectionBackground";
import TypingText from "@/components/TypingText";

const experiences = [
  {
    type: "work" as const,
    title: "Intern – Django Developer",
    org: "Retech Solutions Private Limited, Chennai",
    points: ["Worked on a Django-based Inventory Management System", "Backend logic, database integration, CRUD operations"],
  },
  {
    type: "work" as const,
    title: "Intern – AWS Fundamentals",
    org: "Aventro Technologies, Thiruvennainallur",
    points: ["Learned core AWS services", "Exposure to EC2, S3, IAM, basic cloud workflows"],
  },
  {
    type: "work" as const,
    title: "Intern – UI/UX Designer",
    org: "Novitech R&D Private Limited",
    points: ["Designed user interfaces and user flows using Figma", "Focused on wireframing, usability, and UX basics"],
  },
  {
    type: "academic" as const,
    title: "Academic Project",
    org: "Advanced Automatic Bill Generating Trolley",
    points: ["Automated checkout system with PDF bill generation via email", "Reduced manual billing errors and checkout time", "Tech: HTML, CSS, JavaScript, Firebase, Email-based PDF"],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 border-t border-border relative">
      <SectionBackground variant="dots" />
      <div ref={ref} className={`max-w-6xl mx-auto px-6 transition-all duration-700 relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="section-heading text-center"><span className="neon-gradient-heading"><TypingText text="Experience" trigger={isVisible} /></span></h2>
        <p className="section-subheading text-center">Internships and academic projects</p>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-neon-cyan/20" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-16">
                <div className="absolute left-3 top-1 w-7 h-7 rounded-full bg-secondary border border-neon-cyan/50 flex items-center justify-center"
                  style={{ boxShadow: "0 0 8px hsl(190 100% 50% / 0.3)" }}>
                  {exp.type === "work" ? (
                    <Briefcase size={14} className="text-neon-cyan" />
                  ) : (
                    <BookOpen size={14} className="text-neon-magenta" />
                  )}
                </div>
                <div className="bg-card rounded-lg p-5 card-hover multicolor-border">
                  <h3 className="font-display font-semibold text-foreground">{exp.title}</h3>
                  <p className="neon-text text-sm mt-1">{exp.org}</p>
                  <ul className="mt-3 space-y-1">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex gap-2">
                        <span className="text-neon-cyan mt-1.5 shrink-0">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
