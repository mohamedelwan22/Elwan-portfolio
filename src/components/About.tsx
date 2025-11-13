import { GraduationCap, Code, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import aboutImage from "@/assets/about-image.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Nursing College Graduate with strong foundation in healthcare",
    },
    {
      icon: Code,
      title: "Experience",
      description: "2 years of front-end development with modern technologies",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Creating web experiences that blend tech with human empathy",
    },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A unique blend of healthcare background and tech expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="perspective-container"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src="imgs/linkedin.jpg"
                alt="Mohamed Elwan workspace"
                className="relative rounded-2xl shadow-strong w-full h-auto hover-scale"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* <div className="prose prose-lg dark:prose-invert">
              <p className="text-foreground/90 leading-relaxed">
                I'm a <span className="text-primary font-semibold">nursing graduate</span> who 
                discovered a passion for <span className="text-primary font-semibold">web development</span>. 
                This unique journey has given me a distinctive perspective on creating digital experiences.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                I love building websites that blend{" "}
                <span className="text-secondary font-semibold">creativity</span>,{" "}
                <span className="text-secondary font-semibold">technology</span>, and{" "}
                <span className="text-secondary font-semibold">human empathy</span>.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Currently focused on creating modern web applications with{" "}
                <span className="font-semibold">React</span>,{" "}
                <span className="font-semibold">Sass</span>, and{" "}
                <span className="font-semibold">modern web technologies</span>.
              </p>
            </div> */}
            <div className="prose prose-lg dark:prose-invert">
                <p className="text-foreground/90 leading-relaxed">
                  My journey began in <span className="text-secondary font-semibold">healthcare</span>, where precision and empathy shaped how I
                  understand people. Along the way, I discovered a passion for{" "}
                  <span className="text-primary font-semibold">web development</span>—a space
                  where creativity and logic come together to build meaningful digital
                  experiences.
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  Moving from nursing to tech wasn’t a switch—<span className="text-primary font-semibold">it was an evolution</span>. The same
                  attention to detail I practiced in patient care now guides how I design,
                  debug, and develop{" "}
                  <span className="text-secondary font-semibold">modern interfaces</span>.
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  Today, I focus on building clean, responsive applications using{" "}
                  <span className="font-semibold">React</span>,{" "}
                  <span className="font-semibold">Sass</span>, and{" "}
                  <span className="font-semibold">modern web technologies</span>.
                </p>
              </div>


            {/* Highlights */}
            <div className="grid gap-4 mt-8">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-4 glass-card hover:shadow-medium transition-all duration-300 hover-scale border-l-4 border-l-primary group"
                >
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
