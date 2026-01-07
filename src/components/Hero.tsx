import { useEffect, useState, useRef, useCallback } from "react";
import { Play } from "lucide-react";
import heroVideo1 from "@/assets/hero-video.mp4";
import heroVideo2 from "@/assets/hero-video-2.mp4";
import heroVideo3 from "@/assets/hero-video-3.mp4";
import heroVideo4 from "@/assets/hero-video-4.mp4";

const videos = [heroVideo1, heroVideo2, heroVideo3, heroVideo4];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    setIsVisible(true);
    // Start the first video
    if (videoRefs.current[0]) {
      videoRefs.current[0].play();
    }
  }, []);

  const handleVideoEnd = useCallback((endedIndex: number) => {
    const nextIndex = (endedIndex + 1) % videos.length;
    
    // Start next video
    if (videoRefs.current[nextIndex]) {
      videoRefs.current[nextIndex].currentTime = 0;
      videoRefs.current[nextIndex].play();
    }
    
    // Switch active index after a brief moment to allow overlap
    setTimeout(() => {
      setActiveIndex(nextIndex);
    }, 100);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Videos with Crossfade */}
      <div className="absolute inset-0">
        {videos.map((video, index) => (
          <video
            key={index}
            ref={(el) => (videoRefs.current[index] = el)}
            muted
            playsInline
            preload="auto"
            onEnded={() => handleVideoEnd(index)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent z-20" />
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Giant Title */}
          <h1
            className={`hero-title mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            PIXELNOVA
          </h1>

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
