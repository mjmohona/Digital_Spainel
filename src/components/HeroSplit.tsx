import heroSample from "../assets/herosplit.png";

export default function HeroSplit() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* left content */}
      <div className="md:w-1/2 flex items-center">
        <div className="container mx-auto px-6 py-24">
          <div className="text-sm text-red font-semibold uppercase tracking-wider">
            Brand, Dev, Ecom, Marketing
          </div>
          <h1 className="mt-4 text-xl md:text-5xl font-extrabold text-dsBlue leading-tight">
            We unleash <br /> business potential
          </h1>
          <p className="mt-6 text-gray-700 max-w-lg">
            We create brand experiences which are memorable and distinct. Our
            experienced team create and develop brands with personality and
            resonance.
          </p>
          <a
            href="#contact"
            className="inline-block mt-8 border-b-2 border-dsPink pb-1 hover:opacity-90 transition"
          >
            Let's talk
          </a>
        </div>
      </div>

      {/* right image */}
      <div
        className="md:w-1/2 hero-image"
        style={{ backgroundImage: `url(${heroSample})` }}
      >
        {/* overlay effect */}
        <div className="w-full h-full bg-[rgba(11,45,66,0.75)]"></div>
      </div>
    </section>
  );
}
