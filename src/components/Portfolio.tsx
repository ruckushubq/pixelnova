import { useState } from "react";
import { Play, ChevronLeft, ChevronRight, X } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "broadcast commercial",
    title: "Adidas: Not Sorry",
    subtitle: "(Fifa Women's World Cup)",
    roles: ["post producer"],
    image: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64e62766740502c22ca8ebc0_Adidas%20Fifa.png",
    description:
      "Adidas Canada is focusing on how a Team Canada star is knocking over obstacles to success in the women's game. Longtime Adidas ambassador and Canadian national team player Ashley Lawrence talks about how she has subverted expectations, eschewing pink bedrooms and desk work to instead achieve a dream some might have called 'impossible'.",
    videoUrl: "https://youtu.be/7kVG571frGE",
    credits: [
      { role: "Client", name: "Adidas" },
      { role: "Agency", name: "Salt XC" },
      { role: "Exec. Producer", name: "Devon Soltendieck" },
      { role: "Creative Director", name: "Brad Van Schaik" },
      { role: "Post Producer", name: "Sahil Lulla" },
      { role: "Picture Editor", name: "Jeffrey Sarkodie" },
      { role: "Color", name: "Artjail" },
    ],
  },
  {
    id: 2,
    category: "digital commercial",
    title: "Adidas: Terrex",
    roles: ["offline editor", "online editor", "motion designer"],
    image: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b6ca471ca7b21f229feeee_terrex.png",
    description:
      "Conquering Terrain with typography that moves. Where seamless integration of motion-tracked 3D text with captivating and dynamic typography, mirroring the athletes' agility and resilience. Bold phrases leap, twist, and inspire, igniting a desire to conquer any terrain.",
    videoUrl: "#",
    credits: [
      { role: "Client", name: "Adidas" },
      { role: "Agency", name: "Salt XC" },
      { role: "Picture Editor", name: "Sahil Lulla" },
      { role: "Motion Designer", name: "Sahil Lulla" },
      { role: "Color", name: "Artjail" },
    ],
  },
  {
    id: 3,
    category: "broadcast commercial",
    title: "Adidas: Int'l Women's Day",
    roles: ["offline editor", "online editor", "post producer"],
    image: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b194be718998f26af1e964_Adidas%20Spooner%20image%20%201.png",
    description:
      "We had the opportunity to create a powerful TV spot for Adidas Canada in celebration of International Women's Day. It tells the inspiring story of Natalie Spooner, a professional hockey player who returned to the ice just 6 weeks after giving birth. Her incredible strength and resilience serve as a symbol for women around the world.",
    videoUrl: "https://youtu.be/7kVG571frGE",
    credits: [
      { role: "Client", name: "Adidas" },
      { role: "Agency", name: "Salt XC" },
      { role: "Exec. Producer", name: "Devon Soltendieck" },
      { role: "Picture Editor", name: "Sahil Lulla" },
      { role: "Color", name: "Artjail" },
    ],
  },
  {
    id: 4,
    category: "RBC x TIFF",
    title: "Growing Support: Cinema",
    roles: ["offline Editor", "online editor", "post producer"],
    image: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b19c2a718998f26afc075c_tiff%20image%20banner.png",
    description:
      "Bringing the Magic of Filmmaking to Life. Created for RBC's sponsorship of the Toronto International Film Festival (TIFF), this 30-second cinema spot celebrates the transformative power of filmmaking. Like the festival it promotes, this commercial captures the essence of how film inspires and brings people together.",
    videoUrl: "https://youtu.be/auJvioranyk",
    credits: [
      { role: "Client", name: "RBC" },
      { role: "Agency", name: "SALT XC" },
      { role: "Director", name: "Mike Mildon" },
      { role: "Picture Editor", name: "Sahil Lulla" },
      { role: "Color", name: "Company3" },
    ],
  },
  {
    id: 5,
    category: "digital commercial",
    title: "Women's National Team",
    roles: ["post-producer", "colorist", "offline Editor"],
    image: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b8251198474f9af58c06d2_Screen%20Shot%202023-07-19%20at%201.58.png",
    description:
      "In collaboration with Toyota, we crafted a series of deeply resonant and inspirational spots for Team Canada's Women's National Soccer Team. This project, focusing on empowering young girls with big soccer dreams, stands as a testament to seamless teamwork and trust.",
    videoUrl: "#",
    credits: [
      { role: "Client", name: "Toyota" },
      { role: "Agency", name: "SALT XC" },
      { role: "Picture Editor", name: "Sahil Lulla" },
      { role: "Colorist", name: "Sahil Lulla" },
    ],
  },
  {
    id: 6,
    category: "theatrical trailer",
    title: "Amazon Prime: Neeyat",
    roles: ["creative producer", "offline Editor", "offline sound"],
    image: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b6c84a7ac0d2ed7e79e8ae_neeyat.jpg",
    description:
      "This Bollywood thriller-comedy whodunnit trailer, produced for Amazon Prime, expertly balances suspense and humor without spoiling the film's twists. Garnering over 20 million views on YouTube and widespread industry acclaim, this trailer sets itself apart with its clever structure and pacing.",
    videoUrl: "#",
    credits: [
      { role: "Client", name: "Abunduntia Entertainment" },
      { role: "Agency", name: "Elloel Studios" },
      { role: "Producer", name: "Jovy Philip" },
      { role: "Creative Producer", name: "Sahil Lulla" },
      { role: "Picture Editor", name: "Sahil Lulla" },
    ],
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCredits, setShowCredits] = useState(false);
  const currentProject = projects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setShowCredits(false);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setShowCredits(false);
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title mb-4">See some of my work</h2>
          <p className="text-muted-foreground text-lg">
            Don't believe me? Check these projects out!
          </p>
        </div>

        {/* Portfolio Slider */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Play Overlay */}
              <a
                href={currentProject.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center border border-foreground/30">
                  <Play size={32} className="text-foreground" fill="currentColor" />
                </div>
              </a>

              {/* Navigation */}
              <div className="absolute bottom-4 left-4 flex items-center gap-4">
                <button
                  onClick={prevProject}
                  className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-sm text-muted-foreground">
                  {currentIndex + 1}/{projects.length}
                </span>
                <button
                  onClick={nextProject}
                  className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div>
              {/* Category */}
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
                {currentProject.category}
              </p>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-normal leading-tight mb-4">
                {currentProject.title}
                {currentProject.subtitle && (
                  <span className="block text-muted-foreground text-xl md:text-2xl mt-1">
                    {currentProject.subtitle}
                  </span>
                )}
              </h3>

              {/* Roles */}
              <div className="flex flex-wrap gap-2 mb-6">
                {currentProject.roles.map((role, index) => (
                  <span key={index} className="portfolio-tag">
                    {role}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {currentProject.description}
              </p>

              {/* Credits Toggle */}
              <button
                onClick={() => setShowCredits(!showCredits)}
                className="text-sm tracking-wide uppercase text-foreground hover:text-primary transition-colors mb-6"
              >
                {showCredits ? "Hide Credits" : "View Credits"}
              </button>

              {/* Credits */}
              {showCredits && (
                <div className="grid grid-cols-2 gap-4 p-6 glass-card animate-fade-in">
                  {currentProject.credits.map((credit, index) => (
                    <div key={index}>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                        {credit.role}
                      </p>
                      <p className="text-sm text-foreground">{credit.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setShowCredits(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-foreground w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
