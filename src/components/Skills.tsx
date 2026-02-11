const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C", "Python", "Java"],
  },
  {
    title: "Web / Frontend",
    skills: ["HTML", "CSS", "JavaScript", "UI Design with Figma"],
  },
  {
    title: "Design & Creative Tools",
    skills: ["Adobe After Effects", "Canva", "Adobe Express"],
  },
];

const Skills = () => (
  <section id="skills" className="py-24">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="section-heading text-center">Skills</h2>
      <p className="section-subheading text-center">Technologies and tools I work with</p>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="bg-card border border-border rounded-lg p-6 card-hover">
            <h3 className="font-display font-semibold text-foreground mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
