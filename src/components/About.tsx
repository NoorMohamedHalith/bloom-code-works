import { GraduationCap, Target, Lightbulb } from "lucide-react";

const About = () => (
  <section id="about" className="py-24 bg-secondary/30">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="section-heading text-center">About Me</h2>
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
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">Education</h3>
              <p className="text-muted-foreground text-sm">B.Tech in Information Technology</p>
              <p className="text-muted-foreground text-sm">IFET College of Engineering · Expected 2027</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
              <Target size={22} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">Goal</h3>
              <p className="text-muted-foreground text-sm">Growing into a skilled frontend & full-stack developer through hands-on projects and internships.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
              <Lightbulb size={22} />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground">Approach</h3>
              <p className="text-muted-foreground text-sm">Practical learning, clean design, and user-centered thinking.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
