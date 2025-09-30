import {
  Code,
  Database,
  Server,
  Monitor,
  GitBranch,
  Settings,
  Container,
  Laptop
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Monitor,
      title: "Frontend",
      color: "primary",
      skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "Vue.js", "Axios"]
    },
    {
      icon: Server,
      title: "Backend",
      color: "secondary",
      skills: ["PHP", "CodeIgniter", "Laravel", "Golang", ".NET (Dotnet)", "RESTful API"]
    },
    {
      icon: Database,
      title: "Database",
      color: "accent",
      skills: ["SQL Server", "MySQL", "PostgreSQL", "Supabase"]
    },
    {
      icon: GitBranch,
      title: "Version Control",
      color: "primary",
      skills: ["Git", "GitLab"]
    },
    {
      icon: Laptop,
      title: "Operating Systems",
      color: "secondary",
      skills: ["Linux", "Windows"]
    },
    {
      icon: Container,
      title: "DevOps/Tools",
      color: "accent",
      skills: ["Docker"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          gradient: 'bg-gradient-primary',
          glow: 'glow-primary',
          text: 'text-primary',
          border: 'border-primary/20'
        };
      case 'secondary':
        return {
          gradient: 'bg-gradient-secondary',
          glow: 'glow-secondary',
          text: 'text-secondary',
          border: 'border-secondary/20'
        };
      case 'accent':
        return {
          gradient: 'bg-gradient-accent',
          glow: 'glow-accent',
          text: 'text-accent',
          border: 'border-accent/20'
        };
      default:
        return {
          gradient: 'bg-gradient-primary',
          glow: 'glow-primary',
          text: 'text-primary',
          border: 'border-primary/20'
        };
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-gradient-primary">Technical</span>{" "}
              <span className="text-gradient-secondary">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Teknologi dan tools yang biasa saya gunakan
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const colors = getColorClasses(category.color);

              return (
                <div
                  key={index}
                  className={`bg-gradient-card p-6 rounded-2xl border ${colors.border} shadow-card hover-glow group cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 ${colors.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-orbitron font-semibold ${colors.text} group-hover:scale-105 transition-transform`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-3 p-2 rounded-lg bg-background/50 hover:bg-background/80 transition-colors group/skill"
                      >
                        <div className={`w-2 h-2 ${colors.gradient} rounded-full group-hover/skill:scale-125 transition-transform`} />
                        <span className="text-foreground font-medium group-hover/skill:text-primary transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Skill Count Badge */}
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-${category.color}/10 to-${category.color}/5 border ${colors.border}`}>
                      <Settings className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {category.skills.length} Technologies
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;