import { ExternalLink, Github, Code, Database, Smartphone } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced features including user authentication, product management, shopping cart, and payment integration.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "Vue.js", "MySQL", "Stripe API", "Docker"],
      category: "Full-Stack",
      features: [
        "User authentication & authorization",
        "Product catalog with search & filters",
        "Shopping cart & checkout system",
        "Payment gateway integration",
        "Admin dashboard for management"
      ],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "Task Management API",
      description: "RESTful API built with Golang for task and project management with real-time notifications and team collaboration features.",
      image: "/api/placeholder/400/250", 
      technologies: ["Golang", "PostgreSQL", "Redis", "Docker", "JWT"],
      category: "Backend",
      features: [
        "RESTful API architecture",
        "JWT-based authentication",
        "Real-time notifications",
        "Team collaboration tools",
        "Performance optimization"
      ],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "Analytics Dashboard",
      description: "Modern analytics dashboard built with .NET Core and React, featuring real-time data visualization and reporting capabilities.",
      image: "/api/placeholder/400/250",
      technologies: [".NET Core", "React", "SQL Server", "Chart.js", "SignalR"],
      category: "Full-Stack", 
      features: [
        "Real-time data visualization",
        "Interactive charts & graphs",
        "Custom reporting system", 
        "Data export functionality",
        "Responsive design"
      ],
      github: "#",
      demo: "#",
      status: "In Progress"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full-Stack':
        return Code;
      case 'Backend':
        return Database;
      case 'Frontend':
        return Smartphone;
      default:
        return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Full-Stack':
        return 'primary';
      case 'Backend':
        return 'secondary';
      case 'Frontend':
        return 'accent';
      default:
        return 'primary';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-gradient-primary">Featured</span>{" "}
              <span className="text-gradient-secondary">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing my latest work and technical achievements
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category);
              const categoryColor = getCategoryColor(project.category);
              
              return (
                <div 
                  key={index}
                  className="bg-gradient-card rounded-2xl border border-card-border shadow-card hover-glow group overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-hero flex items-center justify-center relative">
                      <div className="text-6xl font-orbitron font-bold text-white/10 select-none">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        project.status === 'Completed' 
                          ? 'bg-accent/20 text-accent border-accent/30' 
                          : 'bg-secondary/20 text-secondary border-secondary/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border bg-${categoryColor}/20 text-${categoryColor} border-${categoryColor}/30`}>
                        <CategoryIcon className="w-3 h-3" />
                        {project.category}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-orbitron font-bold mb-3 text-gradient-primary group-hover:scale-105 transition-transform">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-orbitron font-semibold mb-2 text-accent">
                        Key Features
                      </h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-sm text-primary font-medium">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-background/50 border border-primary/20 rounded text-xs font-medium text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <HeroButton variant="primary" size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </HeroButton>
                      <HeroButton variant="ghost" size="sm" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </HeroButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* View More Button */}
          <div className="text-center mt-12">
            <HeroButton variant="outline" size="lg">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;