import { Github, Linkedin, Facebook, Send, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 hover-scale text-muted-foreground hover:text-primary"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Mohamed Elwan — Made with{" "}
              <Heart className="h-4 w-4 text-secondary inline fill-current" />{" "}
              in Egypt
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
