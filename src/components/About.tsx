import { GraduationCap, Code, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
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
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A unique blend of healthcare background and tech expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-slide-up">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src={aboutImage}
                alt="Mohamed Elwan workspace"
                className="relative rounded-2xl shadow-strong w-full h-auto hover-scale"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="prose prose-lg dark:prose-invert">
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
            </div>

            {/* Highlights */}
            <div className="grid gap-4 mt-8">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-4 glass-effect hover:shadow-medium transition-all duration-300 hover-scale border-l-4 border-l-primary"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
