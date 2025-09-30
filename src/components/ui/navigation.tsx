import { useState, useEffect } from "react";
import { HeroButton } from "@/components/ui/hero-button";
import { Menu, X, Download } from "lucide-react";
import cv from "@/assets/cv.pdf"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/80 backdrop-blur-md border-b border-border shadow-card"
        : "bg-transparent"
        }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
                className="text-2xl font-orbitron font-bold text-gradient-primary hover:scale-105 transition-transform"
              >
                Bima A.W
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-foreground hover:text-primary transition-colors font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a href={cv} download="CV Bima Arya Wicaksana">
                <HeroButton variant="primary" size="sm">
                  <div className="flex">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </div>
                </HeroButton>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-card border border-border hover:bg-primary/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav >

      {/* Mobile Menu Overlay */}
      {
        isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-md" />
            <div className="fixed top-16 left-0 right-0 bg-card border-b border-border shadow-card">
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className="text-foreground hover:text-primary transition-colors font-medium py-2 border-b border-border/50 last:border-0"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="pt-4">
                    <a href={cv} download="CV Bima Arya Wicaksana">
                      <HeroButton variant="primary" size="sm" className="w-full">
                        <div className="flex">
                          <Download className="w-4 h-4 mr-2" />
                          Download Resume
                        </div>
                      </HeroButton>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Navigation;