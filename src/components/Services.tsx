import { Code, Palette } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Web Development",
    desc: "Building responsive websites using HTML, CSS, and JavaScript with a focus on clean layout, usability, and responsiveness.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Wireframes and interface designs using Figma, including app UI concepts inspired by real-world applications.",
  },
];

const Services = () => (
  <section id="services" className="py-24 bg-secondary/30">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="section-heading text-center">Services</h2>
      <p className="section-subheading text-center">What I can help with</p>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="bg-card border border-border rounded-lg p-6 card-hover">
            <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
              <s.icon size={24} />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
