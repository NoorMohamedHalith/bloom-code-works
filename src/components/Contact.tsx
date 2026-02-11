import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "contactnrmdhalith@gmail.com",
    href: "mailto:contactnrmdhalith@gmail.com",
  },
  {
    icon: Phone,
    label: "+91 93618 60781",
    href: "tel:+919361860781",
  },
  {
    icon: Linkedin,
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/noor-mohamed-halith",
  },
  {
    icon: Github,
    label: "GitHub Profile",
    href: "https://github.com/NoorMohamedHalith",
  },
];

const Contact = () => (
  <section id="contact" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="section-heading text-center">Contact</h2>
      <p className="section-subheading text-center">Let's connect</p>

      <div className="max-w-md mx-auto space-y-4">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg transition-all duration-200 hover:border-primary/40 hover:shadow-md group"
          >
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <link.icon size={20} />
            </div>
            <span className="text-foreground text-sm font-medium">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
