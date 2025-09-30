import { Building2, Calendar, MapPin, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "PT. Mede Media Softika",
      location: "Jakarta Selatan",
      position: "Programmer",
      period: "Jun 2024 - Jun 2025",
      type: "Full-time",
      responsibilities: [
        "Mendockerisasi aplikasi untuk deployment di server Linux RHEL",
        "Membuat fitur notifikasi secara realtime dengan metode SSE (Server Sent Event) menggunakan .NET (dotnet)",
        "Membuat scheduler menggunakan systemd timer pada server linux RHEL",
        "Membuat web Kementerian Koordinator Bidang Pemberdayaan Masyarakat (Kemenko PM) baik dari sisi frontend maupun backend",
        "Menggunakan framework vue js untuk membuat bagian frontend dari sebuah aplikasi",
        "Mentransformasikan desain UI/UX dari Figma ke dalam kode frontend menggunakan Bootstrap/Tailwind."
      ],
      technologies: ["PHP", "Codeigniter", ".Net", "Docker", "Vue.js", "Tailwind", "Bootstrap", "MySQL", "SQL Server", "Git", "RESTful API"]
    },
    {
      company: "PT. Pilihanmu Indonesia Jaya",
      location: "Depok",
      position: "Backend Web Developer Intern",
      period: "Aug 2023 - Dec 2023",
      type: "Internship",
      responsibilities: [
        "Mengembangkan web aplikasi pilihjurusan menggunakan framework laravel 10",
        "Memanage request dan response layer",
        "Mendefinisikan route dan HTTP method",
        "Menghandle autentikasi dan validasi",
        "Membuat dokumentasi API menggunakan redoc"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "RESTful API", "Git", "Redoc", "Docker"]
    },
    {
      company: "PT. Citi Asia Internasional",
      location: "Jakarta Timur",
      position: "Fullstack Developer Intern",
      period: "Feb 2023 - Jun 2023",
      type: "Internship",
      responsibilities: [
        "Mengembangkan web aplikasi surveyasia menggunakan framework laravel",
        "Meredesain web aplikasi surveyasia menggunakan framework vue js",
        "Menambahkan fitur claim koin pada web aplikasi surveyasia",
        "Mendeploy web aplikasi surveyasia menggunakan google cloud platform (GCP)",
        "Membenahi bug yang ada pada web aplikasi surveyasia"
      ],
      technologies: ["PHP", "Laravel", "Vue.Js", "MySQL", "Bootstrap", "Google Cloud Platform (GCP)"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-gradient-primary">Work</span>{" "}
              <span className="text-gradient-secondary">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Perjalanan kerja dan hal-hal penting yang sudah dicapai
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 animate-fade-in ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Connector */}
                <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                  <div className="w-4 h-4 bg-gradient-primary rounded-full mb-4 glow-primary" />
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-32 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <div className="bg-gradient-card p-8 rounded-2xl border border-card-border shadow-card hover-glow group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-orbitron font-bold text-gradient-primary mb-2 group-hover:scale-105 transition-transform">
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 text-secondary font-semibold mb-2">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <div className="flex-shrink-0">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${exp.type === 'Full-time'
                          ? 'bg-gradient-primary text-primary-foreground border-primary/20'
                          : 'bg-gradient-secondary text-secondary-foreground border-secondary/20'
                          }`}>
                          <Briefcase className="w-3 h-3" />
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-lg font-orbitron font-semibold mb-4 text-accent">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">
                              {resp}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-orbitron font-semibold mb-3 text-primary">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-background/50 border border-primary/20 rounded-lg text-sm font-medium text-primary hover:bg-primary/10 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;