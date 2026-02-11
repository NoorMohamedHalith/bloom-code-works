import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "contactnrmdhalith@gmail.com", href: "mailto:contactnrmdhalith@gmail.com" },
  { icon: Phone, label: "+91 93618 60781", href: "tel:+919361860781" },
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/noor-mohamed-halith" },
  { icon: Github, label: "GitHub Profile", href: "https://github.com/NoorMohamedHalith" },
];

const Contact = () => (
  <section id="contact" className="py-24 border-t border-border">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="section-heading text-center">Get In <span className="neon-text">Touch</span></h2>
      <p className="section-subheading text-center">Let's connect</p>

      <div className="max-w-md mx-auto space-y-4">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg transition-all duration-300 hover:border-neon-cyan/40 group card-hover"
          >
            <div className="p-2 rounded-lg bg-secondary border border-border text-muted-foreground group-hover:text-neon-cyan group-hover:border-neon-cyan/40 transition-all duration-300"
              style={{ transition: "box-shadow 0.3s" }}
            >
              <link.icon size={20} />
            </div>
            <span className="text-foreground text-sm font-medium group-hover:text-neon-cyan transition-colors duration-300">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
