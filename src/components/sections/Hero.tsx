import { HeroButton } from "@/components/ui/hero-button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile-bima.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-slide-in-left">
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
              <span className="text-gradient-primary">Bima</span>{" "}
              <span className="text-gradient-secondary">Arya</span>
              <br />
              <span className="text-gradient-primary">Wicaksana</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
              Fullstack & Backend Developer
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about creating modern web applications with expertise in{" "}
              <span className="text-primary font-semibold">React</span>,{" "}
              <span className="text-secondary font-semibold">Laravel</span>,{" "}
              <span className="text-accent font-semibold">Golang</span>, and{" "}
              <span className="text-primary font-semibold">.NET</span>
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <HeroButton variant="primary" size="lg" className="group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </HeroButton>
              <HeroButton variant="ghost" size="lg">
                View Projects
              </HeroButton>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <HeroButton variant="outline" size="icon" className="hover-glow">
                <Github className="w-5 h-5" />
              </HeroButton>
              <HeroButton variant="outline" size="icon" className="hover-glow">
                <Linkedin className="w-5 h-5" />
              </HeroButton>
              <HeroButton variant="outline" size="icon" className="hover-glow">
                <Mail className="w-5 h-5" />
              </HeroButton>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-card hover-scale relative">
                <img 
                  src={profileImage} 
                  alt="Bima Arya Wicaksana - Software Developer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full pulse-glow" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-secondary rounded-full pulse-glow" style={{ animationDelay: "1s" }} />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-accent rounded-full pulse-glow" style={{ animationDelay: "2s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;