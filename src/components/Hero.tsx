import { ArrowDown, Github, Linkedin } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className="text-primary font-medium text-sm tracking-wider uppercase">Hello, I'm</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Noor Mohamed<br />Halith R
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Frontend & UI/UX Developer | B.Tech IT Student
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Pre-final year Information Technology student at IFET College of Engineering with hands-on experience in C, Python, Java, and frontend web technologies. I design clean, user-centered interfaces using Figma and build functional web applications — growing toward becoming a full-stack developer.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollTo("projects")}
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm transition-transform duration-200 hover:scale-105"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 rounded-md border border-border text-foreground font-medium text-sm transition-transform duration-200 hover:scale-105 hover:bg-secondary"
              >
                Contact Me
              </button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/NoorMohamedHalith" target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/noor-mohamed-halith" target="_blank" rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img src={profileImg} alt="Noor Mohamed Halith R" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button onClick={() => scrollTo("about")} className="animate-bounce text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
