
export default function Companies() {
  // Array of logo objects with src and alt text for accessibility
  const companyLogos = [
    { src: "/e1.avif", alt: "Tech Company 1 Logo" },
    { src: "/e2.avif", alt: "Tech Company 2 Logo" },
    { src: "/e3.avif", alt: "Tech Company 3 Logo" },
    { src: "/e4.avif", alt: "Tech Company 4 Logo" },
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-[#F7F8F9]">
      <div className="absolute inset-0" />
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">Built by Engineers from</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
          {companyLogos.map((logo, i) => (
            <div key={i} className="flex justify-center group">
              <div className="p-4 rounded-2xl  backdrop-blur-sm border border-border/30 dark:border-primary/20 group-hover:border-primary/50 dark:group-hover:border-primary/40 transition-colors">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
