import { Code, Heart, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed and user experience"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Love for learning new technologies and solving complex problems"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-gradient-primary">About</span>{" "}
              <span className="text-gradient-secondary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          </div>
          
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story */}
            <div className="animate-slide-in-left">
              <div className="bg-gradient-card p-8 rounded-2xl border border-card-border shadow-card">
                <h3 className="text-2xl font-orbitron font-semibold mb-6 text-gradient-primary">
                  My Developer Journey
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate <span className="text-primary font-semibold">Fullstack & Backend Developer</span> with 
                    a deep love for creating innovative web solutions. My journey in software development began with 
                    curiosity about how applications work behind the scenes.
                  </p>
                  <p>
                    With experience across multiple technology stacks, I specialize in building robust backend systems 
                    and intuitive frontend interfaces. From <span className="text-secondary font-semibold">PHP frameworks</span> like 
                    Laravel and CodeIgniter to modern <span className="text-accent font-semibold">Golang</span> and 
                    <span className="text-primary font-semibold"> .NET applications</span>, I enjoy tackling complex 
                    challenges and turning ideas into reality.
                  </p>
                  <p>
                    I believe in writing clean, maintainable code and staying updated with the latest industry trends. 
                    My goal is to contribute to meaningful projects that make a positive impact while continuously 
                    growing as a developer.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Highlights */}
            <div className="space-y-6 animate-slide-in-right">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gradient-card rounded-xl border border-card-border hover-glow group cursor-pointer"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-orbitron font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;