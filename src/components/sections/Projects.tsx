import { ExternalLink, Github, Code, Database, Smartphone } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";
import DianJaya from "@/assets/dianjaya.png"
import Pmii from "@/assets/pmii.png"
import Hendra from "@/assets/hendrabasir.png"

const Projects = () => {
  const projects = [
    {
      title: "Dian Jaya Furniture",
      description: "E-commerce furniture full-stack dengan fitur autentikasi pengguna, manajemen produk, keranjang belanja, dan terintegrasi dengan payment gateway.",
      image: DianJaya,
      technologies: ["PHP", "Laravel", "MySQL", "Tailwind", "Docker", "Midtrans"],
      category: "Full-Stack",
      features: [
        "User autentikasi dan autorisasi",
        "Katalog produk dan pencarian produk",
        "Keranjang belanja dan sistem checkout",
        "Terintegrasi payment gateway",
        "Admin dashboard untuk memanajemen produk"
      ],
      github: "https://github.com/DRY-7717/Dian-Mebel-Furniture",
      demo: "#",
      status: "Completed"
    },
    {
      title: "Hendra Basir App",
      description: "Full-stack web manajemen data atlet panjat tebing dengan fitur manajemen data atlet, manajemen berita atlet dan manajemen foto atlet.",
      image: Hendra,
      technologies: ["PHP", "Laravel", "MySQL", "Tailwind", "Docker"],
      category: "Full-Stack",
      features: [
        "User autentikasi dan autorisasi",
        "Manajemen data atlet",
        "Manajemen berita terkait atlet",
        "Manajemen foto atlet",
        "Admin dashboard untuk memanajemen atlet panjat tebing"
      ],
      github: "#",
      demo: "https://hendrabasir.com/",
      status: "Completed"
    },
    {
      title: "PMII Cabang Ciputat",
      description: "Full-stack web manajemen data anggota dengan fitur untuk memajemen data anggota organisasi, manajemen prestasi anggota dan fitur kesekretariatan.",
      image: Pmii,
      technologies: ["PHP", "Laravel", "MySQL", "Tailwind", "Docker"],
      category: "Full-Stack",
      features: [
        "User autentikasi dan autorisasi",
        "Manajemen prestasi anggota",
        "Manajemen berita",
        "Manajemen persuratan",
        "Admin dashboard untuk memanajemen anggota"
      ],
      github: "https://github.com/DRY-7717/PMII-CABANG-CIPUTAT-WEBSITE",
      demo: "#",
      status: "Completed"
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
                    <div className="aspect-video bg-gradient-hero  relative">
                      <div className="text-6xl font-orbitron font-bold text-white/10 select-none h-full">
                        {/* {project.title.split(' ').map(word => word[0]).join('')} */}
                        <img src={project.image} className="w-full h-full object-cover object-center" alt="dian jaya" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${project.status === 'Completed'
                        ? 'bg-accent/20 text-accent border-accent/30'
                        : 'bg-secondary/20 text-secondary border-secondary/30'
                        }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className={`flex items-center gap-2 px-3 py-1 bg-slate-700/75 rounded-full text-xs font-medium border bg-${categoryColor}/20 text-${categoryColor} border-${categoryColor}/30`}>
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
                        {project.features.slice(0, 5).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mt-1.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {/* {project.features.length > 3 && (
                          <li className="text-sm text-primary font-medium">
                            +{project.features.length - 5} more features
                          </li>
                        )} */}
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
                    <div className="flex justify-center gap-3">
                      <a href={project.github} target="_blank" className="inline-block w-full">
                        <HeroButton variant="primary" size="sm" className="w-full">
                          <div className="flex items-center">
                            <Github className="w-4 h-4 mr-2" />
                            Code</div>
                        </HeroButton>
                      </a>
                      <a href={project.demo} target="_blank" className="inline-block w-full">
                        <HeroButton variant="ghost" size="sm" className="w-full">
                          <div className="flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </div>
                        </HeroButton>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a href="https://github.com/DRY-7717" target="_blank">
              <HeroButton variant="outline" size="lg">
                <div className="flex items-center">
                  <Github className="w-5 h-5 mr-2" />
                  View All Projects on GitHub
                </div>
              </HeroButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;