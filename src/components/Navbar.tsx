import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
          PIXEL<span className="text-primary">NOVA</span>
        </a>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => scrollToSection("services")} className="nav-link">
            Services
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-link">
            Resume
          </button>
          <button onClick={() => scrollToSection("portfolio")} className="nav-link">
            Portfolio
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-link">
            About
          </button>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="cta-button hidden md:flex"
        >
          Let's chat!
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
