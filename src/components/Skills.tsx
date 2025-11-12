import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
      ],
    },
    {
      title: "Styling & Frameworks",
      skills: [
        { name: "Sass/SCSS", level: 85 },
        { name: "Bootstrap", level: 90 },
        { name: "Responsive Design", level: 95 },
        { name: "Tailwind CSS", level: 75 },
      ],
    },
    {
      title: "Tools & Version Control",
      skills: [
        { name: "Git", level: 85 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "NPM", level: 80 },
      ],
    },
  ];

  const learningNow = [
    "Advanced React Patterns",
    "TypeScript",
    "Next.js",
    "UI/UX Design Principles",
    "Web Accessibility",
    "Performance Optimization",
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 glass-effect hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Currently Learning */}
        <Card className="p-8 glass-effect hover:shadow-medium transition-all duration-300 animate-slide-up">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">
              Currently <span className="text-gradient">Learning</span>
            </h3>
            <p className="text-muted-foreground">
              Always expanding my knowledge and staying up-to-date
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {learningNow.map((item, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-base px-4 py-2 bg-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover-scale"
              >
                {item}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
