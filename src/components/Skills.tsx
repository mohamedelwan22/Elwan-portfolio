import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    <section id="skills" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="p-6 glass-card hover:shadow-medium transition-all duration-300 h-full group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold mb-6 text-primary">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden relative">
                          <motion.div
                            className="h-full bg-gradient-primary rounded-full"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{
                              duration: 1,
                              delay: 0.5 + i * 0.1,
                              ease: "easeOut",
                            }}
                          >
                            <motion.div
                              className="h-full w-full"
                              animate={{
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="p-8 glass-card hover:shadow-neon transition-all duration-500 relative overflow-hidden group">
            <motion.div
              className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <div className="text-center mb-6 relative z-10">
              <h3 className="text-2xl font-bold mb-2">
                Currently <span className="text-gradient">Learning</span>
              </h3>
              <p className="text-muted-foreground">
                Always expanding my knowledge and staying up-to-date
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center relative z-10">
              {learningNow.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-base px-4 py-2 bg-secondary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
