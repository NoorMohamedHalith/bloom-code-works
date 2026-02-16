import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import SectionBackground from "@/components/SectionBackground";
import TypingText from "@/components/TypingText";

const contactLinks = [
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/noor-mohamed-halith" },
  { icon: Github, label: "GitHub Profile", href: "https://github.com/NoorMohamedHalith" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact", {
        body: form,
      });

      if (error) throw error;

      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
      );
      window.open(`mailto:contactnrmdhalith@gmail.com?subject=${subject}&body=${body}`, "_blank");
      toast({ title: "Opening email client", description: "The backend is unavailable, opening your email client instead." });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-border relative">
      <SectionBackground variant="dots" />
      <div ref={ref} className={`max-w-6xl mx-auto px-6 transition-all duration-700 relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="section-heading text-center"><TypingText text="Get In " trigger={isVisible} /><span className="neon-gradient-heading"><TypingText text="Touch" trigger={isVisible} delay={500} /></span></h2>
        <p className="section-subheading text-center">Let's connect</p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Your Name</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:border-neon-cyan/60 transition-colors multicolor-border"
                placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Your Email</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:border-neon-cyan/60 transition-colors multicolor-border"
                placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Your Phone</label>
              <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:border-neon-cyan/60 transition-colors multicolor-border"
                placeholder="+91 XXXXX XXXXX" />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-1">Message</label>
              <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:border-neon-cyan/60 transition-colors resize-none multicolor-border"
                placeholder="Your message..." />
            </div>
            <button type="submit" disabled={sending} className="neon-btn multicolor-border flex items-center gap-2">
              <Send size={16} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>

          <div className="space-y-4">
            <a href="mailto:contactnrmdhalith@gmail.com"
              className="flex items-center gap-4 p-4 bg-card rounded-lg transition-all duration-300 group card-hover multicolor-border">
              <div className="p-2 rounded-lg bg-secondary text-muted-foreground group-hover:text-neon-cyan transition-all duration-300">
                <Mail size={20} />
              </div>
              <span className="text-foreground text-sm font-medium group-hover:text-neon-cyan transition-colors duration-300">contactnrmdhalith@gmail.com</span>
            </a>
            <a href="tel:+919361860781"
              className="flex items-center gap-4 p-4 bg-card rounded-lg transition-all duration-300 group card-hover multicolor-border">
              <div className="p-2 rounded-lg bg-secondary text-muted-foreground group-hover:text-neon-cyan transition-all duration-300">
                <Phone size={20} />
              </div>
              <span className="text-foreground text-sm font-medium group-hover:text-neon-cyan transition-colors duration-300">+91 93618 60781</span>
            </a>
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-lg transition-all duration-300 group card-hover multicolor-border">
                <div className="p-2 rounded-lg bg-secondary text-muted-foreground group-hover:text-neon-cyan transition-all duration-300">
                  <link.icon size={20} />
                </div>
                <span className="text-foreground text-sm font-medium group-hover:text-neon-cyan transition-colors duration-300">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
