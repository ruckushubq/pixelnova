import { Play } from "lucide-react";

interface FeaturedProjectProps {
  brandLogo: string;
  brandName: string;
  title: string;
  videoUrl: string;
  backgroundImage?: string;
}

const FeaturedProject = ({
  brandLogo,
  brandName,
  title,
  videoUrl,
  backgroundImage,
}: FeaturedProjectProps) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>
      )}

      <div className="relative container mx-auto px-6 md:px-12">
        <div className="max-w-2xl">
          {/* Brand Logo */}
          <img
            src={brandLogo}
            alt={brandName}
            className="h-10 md:h-12 w-auto mb-8 opacity-90"
          />

          {/* Label */}
          <p className="section-label">Featured Project</p>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-normal leading-tight mb-8">
            {title}
          </h2>

          {/* Watch Button */}
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex"
          >
            <Play size={16} fill="currentColor" />
            WATCH NOW
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
