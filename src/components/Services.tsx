import { useState } from "react";

const services = [
  {
    id: "editing",
    title: "Picture Editing",
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
    id: "motion",
    title: "Motion Design",
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
    id: "color",
    title: "Color Grading",
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
    id: "producing",
    title: "Post Producing",
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
        <div className="text-center mb-16">
          <p className="section-label">Services</p>
          <h2 className="section-title mb-4">Your one stop shop</h2>
          <p className="text-muted-foreground text-lg">Simplify post production</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-0 mb-16 border-b border-border/30">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`service-tab ${
                activeTab === service.id ? "service-tab-active" : ""
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeService && (
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
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
