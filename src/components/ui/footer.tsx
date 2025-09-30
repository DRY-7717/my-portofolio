import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/DRY-7717",
      label: "GitHub",
      color: "primary"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bima-arya-wicaksana-b233a8249/",
      label: "LinkedIn",
      color: "secondary"
    },
    {
      icon: Mail,
      href: "mailto:wicaksanabimaarya01@gmail.com",
      label: "Email",
      color: "accent"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-16 border-t border-border">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-orbitron font-bold text-gradient-primary mb-4">
                Bima Arya Wicaksana
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Fullstack & Backend Developer dengan passion menciptakan solusi web inovatif menggunakan teknologi modern. Selalu siap menghadapi tantangan dan peluang baru.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <HeroButton variant="outline" size="icon" className="hover-glow">
                      <Icon className="w-5 h-5" />
                    </HeroButton>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-orbitron font-semibold mb-4 text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-orbitron font-semibold mb-4 text-secondary">
              Contact
            </h4>
            <div className="space-y-3 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Email</p>
                <a
                  href="mailto:wicaksanabimaarya01@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  wicaksanabimaarya01@gmail.com
                </a>
              </div>
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p>Depok, Indonesia</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Status</p>
                <span className="inline-flex items-center gap-2 px-2 py-1 bg-accent/20 text-accent rounded-full text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © {currentYear} Bima Arya Wicaksana. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;