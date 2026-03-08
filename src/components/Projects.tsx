import { ShoppingCart, Cpu, Car, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import trolleyPrototype from "@/assets/trolley-prototype.jpeg";
import SectionBackground from "@/components/SectionBackground";
import TypingText from "@/components/TypingText";

const projects = [
  {
    title: "Advanced Automatic Bill Generating Trolley",
    desc: "An automated shopping checkout system that calculates item-wise pricing, stores purchase data, and generates a final bill as a PDF delivered via email — reducing manual billing errors and checkout time.",
    icon: ShoppingCart,
    tech: ["HTML", "CSS", "JavaScript", "Firebase", "Email PDF"],
    image: trolleyPrototype,
    highlights: [
      "Firebase for real-time data storage and retrieval",
      "Automated email delivery with generated PDF bills",
    ],
  },
  {
    title: "IoT-Based Pesticide Sprayer System",
    desc: "Built a smart pesticide sprayer using ESP32-CAM and GPS. Reduced chemical waste by 40% with accurate spraying and remote monitoring.",
    icon: Cpu,
    tech: ["ESP32-CAM", "GPS", "IoT", "Embedded C"],
    highlights: [
      "Reduced chemical waste by 40% with precision spraying",
      "Remote monitoring via ESP32-CAM with GPS tracking",
    ],
  },
  {
    title: "Adaptive Air Brake System",
    desc: "Developed a vehicle safety system using Arduino Nano and pressure sensors. Gave alerts and controlled speed based on air pressure levels.",
    icon: Car,
    tech: ["Arduino Nano", "Pressure Sensors", "Embedded C"],
    highlights: [
      "Real-time air pressure monitoring and alerts",
      "Automatic speed control for enhanced vehicle safety",
    ],
  },
  {
    title: "Malware Analysis through Digital Forensics",
    desc: "Analyzed malware using Kali Linux tools like Guymager and Sleuth Kit. Collected and examined digital evidence using basic forensic methods.",
    icon: Shield,
    tech: ["Kali Linux", "Guymager", "Sleuth Kit", "Digital Forensics"],
    highlights: [
      "Malware detection and evidence collection",
      "Forensic analysis using industry-standard tools",
    ],
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 border-t border-border relative">
      <SectionBackground variant="orbs" />
      <div ref={ref} className={`max-w-6xl mx-auto px-6 transition-all duration-700 relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="section-heading text-center"><span className="neon-gradient-heading"><TypingText text="Projects" trigger={isVisible} /></span></h2>
        <p className="section-subheading text-center">Things I've built</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div key={project.title} className="bg-card rounded-lg overflow-hidden card-hover multicolor-border flex flex-col">
                {project.image && (
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-secondary neon-border">
                      <Icon size={20} className="text-neon-cyan" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground leading-tight">{project.title}</h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.desc}</p>

                  <div className="space-y-2 mb-4">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-neon-cyan mt-0.5 shrink-0">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-tag text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
