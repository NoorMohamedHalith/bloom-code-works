import { Award, Trophy, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionBackground from "@/components/SectionBackground";
import TypingText from "@/components/TypingText";

const certifications = [
  { title: "Prompt Engineering Certification", issuer: "Infosys Springboard", date: "Jan 2026", desc: "Learned how to create clear and effective prompts, work confidently with large language models, and use AI tools to solve practical, real-world problems." },
  { title: "Artificial Intelligence for All", issuer: "Infosys Springboard", date: "Jan 2026", desc: "Built a foundational understanding of AI concepts, real-world applications, and the impact of intelligent systems in modern technology." },
  { title: "Introduction to Artificial Intelligence", issuer: "Infosys Springboard", date: "Jan 2026", desc: "Developed foundational knowledge of AI principles, including machine learning basics and practical industry applications." },
  { title: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy", date: "Dec 2025", desc: "Built a strong foundation in networking concepts, including network fundamentals, protocols, IP addressing and basic network configuration." },
  { title: "UI/UX Design Basics", issuer: "Novitech", date: "Jan 2025", desc: "Learned fundamental UI/UX principles, including user research, wireframing, prototyping, and creating user-friendly interface designs." },
  { title: "Python for Data Science", issuer: "NPTEL", date: "Jan 2024", desc: "Learned to use Python for data analysis, including working with libraries like NumPy and Pandas for handling and processing datasets." },
  { title: "AWS Fundamentals Internship", issuer: "Aventro Technologies", date: "Aug–Sep 2025", desc: "Gained hands-on experience with core AWS services and developed a practical understanding of cloud computing basics." },
  { title: "Build & Fly Your Own Drone Workshop", issuer: "AIC-PEC Foundation", date: "Jan 2025", desc: "Participated in a hands-on drone assembly and flight workshop." },
];

const achievements = [
  { title: "3rd Place – ZEPHORIA'25 Project Expo", issuer: "Vel Tech High Tech", date: "Sep 2025", desc: "Secured 3rd place for presenting \"Automatic Bill Generating Trolley\", an innovative retail automation project, at a national-level AI & ML symposium." },
  { title: "2nd Place – Paper Presentation, COMPEIN'2K25", issuer: "St. Joseph's College", date: "Sep 2025" },
  { title: "1st Place – UI/UX Design Event", issuer: "ISTE Chapter, IFET College of Engineering", date: "2025" },
  { title: "3rd Place – Poster Presentation", issuer: "ISTE Chapter, IFET College of Engineering", date: "2025" },
];

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-24 border-t border-border relative">
      <SectionBackground variant="orbs" />
      <div ref={ref} className={`max-w-6xl mx-auto px-6 transition-all duration-700 relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        
        {/* Certifications */}
        <h2 className="section-heading text-center">
          <TypingText text="My " trigger={isVisible} />
          <span className="neon-gradient-heading"><TypingText text="Certifications" trigger={isVisible} delay={400} /></span>
        </h2>
        <p className="section-subheading text-center">Professional certifications and courses completed</p>

        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {certifications.map((cert) => (
            <div key={cert.title} className="bg-card rounded-lg p-5 card-hover multicolor-border flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-secondary border border-neon-cyan/40 flex items-center justify-center" style={{ boxShadow: "0 0 10px hsl(190 100% 50% / 0.2)" }}>
                  <Award size={18} className="text-neon-cyan" />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-semibold text-foreground text-sm leading-tight">{cert.title}</h3>
                <p className="neon-text text-xs mt-1">{cert.issuer}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{cert.date}</p>
                {cert.desc && <p className="text-muted-foreground text-xs mt-2 leading-relaxed">{cert.desc}</p>}
                <span className="inline-flex items-center gap-1 mt-3 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-neon-cyan/30 text-neon-cyan bg-neon-cyan/5">
                  <ExternalLink size={10} /> View Credential
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <h2 className="section-heading text-center">
          <span className="neon-gradient-heading"><TypingText text="Achievements" trigger={isVisible} delay={800} /></span>
        </h2>
        <p className="section-subheading text-center">Competitions and awards</p>

        <div className="grid md:grid-cols-2 gap-5">
          {achievements.map((ach) => (
            <div key={ach.title} className="bg-card rounded-lg p-5 card-hover multicolor-border flex gap-4">
              <div className="shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-secondary border border-neon-magenta/40 flex items-center justify-center" style={{ boxShadow: "0 0 10px hsl(310 100% 60% / 0.2)" }}>
                  <Trophy size={18} className="text-neon-magenta" />
                </div>
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-semibold text-foreground text-sm leading-tight">{ach.title}</h3>
                <p className="neon-text text-xs mt-1">{ach.issuer}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{ach.date}</p>
                {ach.desc && <p className="text-muted-foreground text-xs mt-2 leading-relaxed">{ach.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
