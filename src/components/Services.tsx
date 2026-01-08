import { useState } from "react";
import { ChevronDown } from "lucide-react";
import serviceEditing from "@/assets/service-editing.png";
import serviceColor from "@/assets/service-color.png";
import serviceSound from "@/assets/service-sound.png";
import serviceMotion from "@/assets/service-motion.png";
import serviceProducing from "@/assets/service-producing.png";

const services = [
  {
    id: "editing",
    number: "01",
    title: "Video Editing",
    accent: "Video",
    shortDesc: "Full post-production from assembly to final delivery. Narrative pacing, seamless transitions, and the polish that separates amateur from professional.",
    image: serviceEditing,
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
    image: serviceColor,
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
    image: serviceSound,
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
    image: serviceMotion,
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
    image: serviceProducing,
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
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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

        {/* Services Accordion */}
        <div className="border-t border-border/30">
          {services.map((service) => {
            const isExpanded = expandedId === service.id;
            
            return (
              <div key={service.id} className="border-b border-border/30">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleService(service.id)}
                  className={`group w-full text-left py-6 md:py-8 grid grid-cols-12 gap-4 md:gap-8 items-center hover:bg-muted/5 transition-colors duration-300 ${
                    isExpanded ? "bg-muted/10" : ""
                  }`}
                >
                  {/* Number */}
                  <div className="col-span-1 text-muted-foreground/50 text-sm font-body">
                    {service.number}
                  </div>

                  {/* Title */}
                  <div className="col-span-10 md:col-span-3">
                    <h3 className="text-lg md:text-xl font-display font-semibold text-foreground">
                      <span className={`${isExpanded ? "text-primary" : "text-primary/70 group-hover:text-primary"} transition-colors`}>
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
                    <ChevronDown className={`w-5 h-5 transition-all duration-300 ${
                      isExpanded 
                        ? "text-primary rotate-180" 
                        : "text-muted-foreground/50 group-hover:text-primary"
                    }`} />
                  </div>
                </button>

                {/* Accordion Content - Expands directly under the row */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="py-8 md:py-12 pl-0 md:pl-12">
                      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                        {/* Image */}
                        <div className="relative order-2 md:order-1">
                          <div className="rounded-lg overflow-hidden">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-auto"
                            />
                          </div>
                        </div>

                        {/* Text */}
                        <div className="order-1 md:order-2">
                          <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
                            <span className="text-primary">{service.accent}</span>
                            {service.title.replace(service.accent, "")}
                          </h4>
                          
                          {/* Bullets */}
                          <ul className="space-y-4 mb-8">
                            {service.bullets.map((bullet, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="text-foreground font-medium">{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Description */}
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
