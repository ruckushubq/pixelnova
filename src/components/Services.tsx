import { useState } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "editing",
    number: "01",
    title: "Video Editing",
    accent: "Video",
    shortDesc: "Full post-production from assembly to final delivery. Narrative pacing, seamless transitions, and the polish that separates amateur from professional.",
    image: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b50365b67156937609a743_Asset%205%404x.png",
    bullets: [
      "Offline & Online Editing",
      "Skilled in Premiere Pro, Final Cut Pro X, and DaVinci Resolve",
      "Support with narrative and conceptual builds by providing visual treatments",
    ],
    description:
      "Equipped with sharp cinematic intuition and a deep understanding of storytelling, I meticulously piece together each frame to create a compelling story that resonates. Whether it's commercial spots, or branded content for social, I breathe life into every project with precision and flair.",
  },
  {
    id: "color",
    number: "02",
    title: "Color Grading",
    accent: "Color",
    shortDesc: "Cinematic color science that sets the mood. From LOG to final grade, we make every frame look exactly how it should feel.",
    image: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b508cff2877ee7c82d28a4_color%20grading.png",
    bullets: [
      "Proficiency in DaVinci Resolve",
      "Visual style creation and shot matching",
      "Skin tone correction",
    ],
    description:
      "Transform the visual aesthetics of your footage with professional color grading services. Leveraging my expertise in DaVinci Resolve, I can enhance mood, direct viewers' focus, and bring out the best in every shot. Whether you seek a subtle enhancement or a bold, stylized look, I can help bring your vision to life.",
  },
  {
    id: "sound",
    number: "03",
    title: "Sound Design",
    accent: "Sound",
    shortDesc: "Audio mixing, Foley, and soundscaping. Because great video is 50% what you hear. We make sure every sound hits right.",
    image: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b505eaeac4a26bc496a4ee_Asset%201%404x.png",
    bullets: [
      "Professional audio mixing and mastering",
      "Foley and sound effect creation",
      "Ambient soundscape design",
    ],
    description:
      "Great visuals deserve great sound. From dialogue clarity to immersive soundscapes, I craft audio experiences that elevate your content. Whether it's subtle background ambience or punchy sound effects, every audio element is carefully designed to complement your visuals.",
  },
  {
    id: "motion",
    number: "04",
    title: "Motion Graphics",
    accent: "Motion",
    shortDesc: "Titles, lower thirds, animated elements. When static isn't enough, we add movement that enhances without overwhelming.",
    image: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b505eaeac4a26bc496a4ee_Asset%201%404x.png",
    bullets: [
      "Skilled in After Effects and complimentary Adobe Suite products",
      "Supports with concept generation and art direction",
      "Visual effects pipeline experience",
    ],
    description:
      "Make your stories move in captivating ways with motion design. By blending creativity and technology, I design and animate graphics that add depth, excitement, and visual interest to your content. Through strategic motion design, I can help transform your narrative into a dynamic visual experience that engages and converts.",
  },
  {
    id: "producing",
    number: "05",
    title: "Post Producing",
    accent: "Post",
    shortDesc: "Comprehensive project planning and coordination. Effective resource and budget management from start to finish.",
    image: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b50c73720955c1fec12eb4_Asset%203%404x.png",
    bullets: [
      "Comprehensive project planning and coordination",
      "Effective resource and budget management",
      "Successful stakeholder collaboration",
    ],
    description:
      "Streamline your project from inception to completion with post-production management. As an experienced post-producer, I coordinate, manage, and oversee every aspect of the post-production process, ensuring quality, efficiency, and adherence to budget and timeline. From managing multiple stakeholders to creating project plans and budgets, I am your reliable partner in delivering successful projects.",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("editing");
  const activeService = services.find((s) => s.id === activeTab);

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label mb-4">Services</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            What we do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            End-to-end post-production. From the moment footage hits our drives to the
            final export, we handle everything.
          </p>
        </div>

        {/* Services List Overview */}
        <div className="border-t border-border/30 mb-20">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`group w-full text-left border-b border-border/30 py-6 md:py-8 grid grid-cols-12 gap-4 md:gap-8 items-start hover:bg-muted/5 transition-colors duration-300 -mx-4 px-4 ${
                activeTab === service.id ? "bg-muted/10" : ""
              }`}
            >
              {/* Number */}
              <div className="col-span-1 text-muted-foreground/50 text-sm font-body">
                {service.number}
              </div>

              {/* Title */}
              <div className="col-span-10 md:col-span-3">
                <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
                  <span className={`${activeTab === service.id ? "text-primary" : "text-primary/70 group-hover:text-primary"} transition-colors`}>
                    {service.accent}
                  </span>
                  {service.title.replace(service.accent, "")}
                </h3>
              </div>

              {/* Description */}
              <div className="hidden md:block col-span-7">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Arrow */}
              <div className="col-span-1 flex justify-end">
                <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                  activeTab === service.id 
                    ? "text-primary translate-x-1" 
                    : "text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1"
                }`} />
              </div>
            </button>
          ))}
        </div>

        {/* Detailed Content */}
        {activeService && (
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center animate-fade-in">
            {/* Image */}
            <div className="relative">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full max-w-md mx-auto"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                <span className="text-primary">{activeService.accent}</span>
                {activeService.title.replace(activeService.accent, "")}
              </h3>
              
              {/* Bullets */}
              <ul className="space-y-4 mb-8">
                {activeService.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {activeService.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
