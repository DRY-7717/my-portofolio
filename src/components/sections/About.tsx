import { Code, Heart, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Menulis kode yang bersih, mudah dirawat, dan efisien"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Fokus pada optimasi aplikasi agar cepat dan nyaman digunakan"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Suka banget belajar hal-hal baru di teknologi dan nyari solusi buat masalah rumit"
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
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                  <p>
                    Saya seorang Fullstack & Backend Developer yang suka banget bikin solusi web yang kreatif dan bermanfaat. Awalnya saya tertarik sama dunia programming karena penasaran gimana sih aplikasi bisa jalan di balik layar.
                  </p>
                  <p>
                    Sekarang, saya fokus bikin sistem backend yang kuat sekaligus antarmuka yang enak dipakai. Buat saya, tantangan yang rumit justru seru karena bisa ngubah ide jadi sesuatu yang nyata.
                  </p>
                  <p>
                    Saya percaya bikin kode itu harus rapi, gampang dirawat, dan selalu update sama perkembangan terbaru. Harapan saya, bisa terlibat di proyek-proyek yang punya dampak positif sekaligus bikin saya terus berkembang sebagai developer.
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