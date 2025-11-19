import { Github, Linkedin, Facebook, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/mohamedelwan22",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mohamed-elwan-9b41a8193",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/profile.php?id=100015772284206",
    },
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/MELWAN7497",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/201159279716",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-background/85 dark:bg-background/92"></div>
      <div 
        className="absolute inset-0 opacity-30 dark:opacity-40"
        style={{ background: 'var(--gradient-mesh)' }}
      ></div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotate: [0, 14, -8, 14, -4, 10, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <span className="text-4xl md:text-5xl lg:text-6xl">👋</span>
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="text-gradient">Mohamed Elwan</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Front-End Developer | Nursing Graduate
          </motion.p>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building clean, responsive, and human-centered web experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-base md:text-lg px-8 py-6 shadow-strong"
              >
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="glass-card border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base md:text-lg px-8 py-6"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-soft"
                aria-label={social.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.3 },
                }}
              >
                <social.icon className="h-5 w-5 md:h-6 md:w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2 glass-card">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
