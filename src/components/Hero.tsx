import { useEffect, useState, useRef } from "react";
import { Play } from "lucide-react";
import heroVideo1 from "@/assets/hero-video.mp4";
import heroVideo2 from "@/assets/hero-video-2.mp4";
import heroVideo3 from "@/assets/hero-video-3.mp4";
import heroVideo4 from "@/assets/hero-video-4.mp4";

const videos = [heroVideo1, heroVideo2, heroVideo3, heroVideo4];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const currentVideoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Handle current video ending
  const handleVideoEnd = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Start playing the next video (it's already preloaded)
    if (nextVideoRef.current) {
      nextVideoRef.current.play();
    }
    
    // After fade transition, swap indices
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setNextIndex((nextIndex + 1) % videos.length);
      setIsTransitioning(false);
    }, 800);
  };

  // Preload next video when current starts playing
  useEffect(() => {
    if (nextVideoRef.current) {
      nextVideoRef.current.load();
    }
  }, [nextIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Videos */}
      <div className="absolute inset-0">
        {/* Current Video */}
        <video
          ref={currentVideoRef}
          key={`current-${currentIndex}`}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ease-in-out ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          } z-10`}
        >
          <source src={videos[currentIndex]} type="video/mp4" />
        </video>
        
        {/* Next Video (preloaded, fades in during transition) */}
        <video
          ref={nextVideoRef}
          key={`next-${nextIndex}`}
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-800 ease-in-out ${
            isTransitioning ? 'opacity-100' : 'opacity-0'
          } z-0`}
        >
          <source src={videos[nextIndex]} type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent z-20" />
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Brand Mark */}
          <div
            className={`mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span className="text-xs tracking-[0.4em] uppercase text-primary/80 font-body block mb-2">Studio</span>
          </div>

          {/* Role Tags */}
          <p
            className={`text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Production — Post — Creative
          </p>

          {/* Tagline */}
          <h2
            className={`text-3xl md:text-5xl lg:text-6xl font-display font-normal leading-tight mb-10 max-w-2xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Cinematic brand stories{" "}
            <span className="text-primary">optimized to engage</span>
          </h2>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <button className="cta-button-outline">Our Work</button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="cta-button flex items-center gap-2"
            >
              <Play size={16} fill="currentColor" />
              WATCH SHOWREEL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
