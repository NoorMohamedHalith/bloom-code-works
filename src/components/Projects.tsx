import { Database, Mail, ShoppingCart } from "lucide-react";

const Projects = () => (
  <section id="projects" className="py-24 border-t border-border">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="section-heading text-center"><span className="neon-text">Projects</span></h2>
      <p className="section-subheading text-center">Things I've built</p>

      <div className="max-w-2xl mx-auto">
        <div className="bg-card border border-border rounded-lg overflow-hidden card-hover">
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

export default Projects;
