import { Play } from "lucide-react";

const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src="https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b30dd9e9d79e7ecff7f35e_SALT%20XC%20Portraits%202202082_Sahil%20Lulla.jpg"
                alt="Sahil Lulla - Post Lead & Editor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="section-label">About Me</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-normal leading-tight mb-8">
              Who's this guy?
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed mb-10">
              <p>
                Toronto-based Post Lead & Editor with a passion for crafting
                compelling narratives in the dynamic marketing industry.
              </p>
              <p>
                I blend creative vision with post-production expertise,
                specializing in editing, color grading, and leveraging technology
                to enhance workflows.
              </p>
              <p>
                Known for my problem-solving abilities and collaborative approach,
                I lead diverse teams to turn creative ideas into tangible results.
                Let's work together to create something exceptional!
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/6791a49dd54b04fda352bb44_Sahil%20Lulla%20_%20Resume_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button-outline"
              >
                Resumé
              </a>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="cta-button"
              >
                <Play size={16} fill="currentColor" />
                WATCH NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
