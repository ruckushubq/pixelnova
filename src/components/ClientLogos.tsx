const clients = [
  { name: "Subway", logo: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b93ad71b36f3b349999d9e_Layer%202.png" },
  { name: "CAA", logo: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b93b6fc6f83ddafd25a3b6_CAA%201.png" },
  { name: "Adidas", logo: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b8199e3c1b16509973d45d_Adidas-White-Logo.wine.svg" },
  { name: "Toyota", logo: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b93be0a6d708eb982f4100_kisspng-toyota-86-car-logo-toyota-5ae8f3db747149.374733441525216219477.png" },
  { name: "RBC", logo: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b81377d9b508d2beda7b5e_RBC%20Logo.png" },
  { name: "Western Digital", logo: "https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b93aa98eb5ddace1fcd77b_WD.png" },
];

const ClientLogos = () => {
  return (
    <section className="py-12 border-y border-border/30 overflow-hidden bg-background">
      <div className="flex animate-marquee">
        {[...clients, ...clients, ...clients].map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 px-8 md:px-12 flex items-center justify-center"
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="client-logo h-6 md:h-8 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
