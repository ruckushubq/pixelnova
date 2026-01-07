import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Video Editing",
    accent: "Video",
    description:
      "Full post-production from assembly to final delivery. Narrative pacing, seamless transitions, and the polish that separates amateur from professional.",
  },
  {
    id: "02",
    title: "Color Grading",
    accent: "Color",
    description:
      "Cinematic color science that sets the mood. From LOG to final grade, we make every frame look exactly how it should feel.",
  },
  {
    id: "03",
    title: "Sound Design",
    accent: "Sound",
    description:
      "Audio mixing, Foley, and soundscaping. Because great video is 50% what you hear. We make sure every sound hits right.",
  },
  {
    id: "04",
    title: "Motion Graphics",
    accent: "Motion",
    description:
      "Titles, lower thirds, animated elements. When static isn't enough, we add movement that enhances without overwhelming.",
  },
];

const Services = () => {
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

        {/* Services List */}
        <div className="border-t border-border/30">
          {services.map((service) => (
            <div
              key={service.id}
              className="group border-b border-border/30 py-8 md:py-10 grid grid-cols-12 gap-4 md:gap-8 items-start hover:bg-muted/5 transition-colors duration-300 -mx-4 px-4"
            >
              {/* Number */}
              <div className="col-span-1 text-muted-foreground/50 text-sm font-body">
                {service.id}
              </div>

              {/* Title */}
              <div className="col-span-11 md:col-span-3">
                <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                  <span className="text-primary">{service.accent}</span>
                  {service.title.replace(service.accent, "")}
                </h3>
              </div>

              {/* Description */}
              <div className="col-span-11 col-start-2 md:col-span-7 md:col-start-5">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex col-span-1 justify-end">
                <ArrowRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
