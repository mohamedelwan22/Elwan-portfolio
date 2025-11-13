import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Modern online shopping experience with cart functionality and responsive design",
      technologies: ["React", "Sass", "JavaScript", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      github: "https://github.com/mohamedelwan22",
      demo: "#",
    },
    {
      title: "Healthcare Dashboard",
      description:
        "Medical data visualization tool combining my nursing and tech background",
      technologies: ["React", "JavaScript", "CSS3", "Chart.js"],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      github: "https://github.com/mohamedelwan22",
      demo: "#",
    },
    {
      title: "Portfolio Template",
      description:
        "Clean and modern portfolio template for developers and creatives",
      technologies: ["React", "Sass", "Bootstrap", "Git"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      github: "https://github.com/mohamedelwan22",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "Intuitive task tracker with drag-and-drop functionality and categories",
      technologies: ["React", "JavaScript", "CSS3", "HTML5"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      github: "https://github.com/mohamedelwan22",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 perspective-container">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="group overflow-hidden glass-card hover:shadow-neon transition-all duration-500 h-full transform-3d">
                {/* Project Image */}
                <div className="relative overflow-hidden h-56 bg-muted">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Floating tech icons on hover */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <motion.div
                        key={i}
                        className="glass-card px-3 py-1 text-xs font-medium"
                        initial={{ y: 20, opacity: 0 }}
                        animate={
                          hoveredIndex === index
                            ? { y: 0, opacity: 1 }
                            : { y: 20, opacity: 0 }
                        }
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <motion.h3
                    className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors"
                    animate={{
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="glass-card border-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-primary hover:opacity-90"
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
