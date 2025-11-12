import { Github, Linkedin, Facebook, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

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
      url: "https://t.me/Elwan01159279716",
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
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 dark:bg-background/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-4">
            <span className="text-4xl md:text-5xl lg:text-6xl animate-scale-in">
              👋
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">Mohamed Elwan</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium mb-4">
            Front-End Developer | Nursing Graduate
          </p>

          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Building clean, responsive, and human-centered web experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-base md:text-lg px-8 py-6 hover-scale shadow-medium"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base md:text-lg px-8 py-6 hover-scale"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-scale shadow-soft"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
