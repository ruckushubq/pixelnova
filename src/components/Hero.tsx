import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-mountain.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Mountain peaks at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Giant Title */}
          <h1
            className={`hero-title mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            8,400 PEAKS
          </h1>

          {/* Role Tags */}
          <p
            className={`text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Editor — Producer — Colorist
          </p>

          {/* Tagline */}
          <h2
            className={`text-3xl md:text-5xl lg:text-6xl font-display font-normal leading-tight mb-10 max-w-2xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Cinematic brand stories{" "}
            <span className="text-muted-foreground">optimized to engage</span>
          </h2>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <button className="cta-button-outline">My resumé</button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="cta-button flex items-center gap-2"
            >
              <Play size={16} fill="currentColor" />
              WATCH NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
