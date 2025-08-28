import { useState } from "react";
import sample1 from "../assets/sample1.jpg";
import sample2 from "../assets/sample2.jpg";
import sample3 from "../assets/sample3.jpg";

type TabKey = "All" | "Branding" | "Web Design" | "Digital Marketing";

const projects = [
  {
    id: 1,
    title: "Colorful Wellington",
    category: "Branding",
    img: sample1,
    excerpt: "A playful packaging project.",
  },
  {
    id: 2,
    title: "Make Ideas Happen",
    category: "Web Design",
    img: sample2,
    excerpt: "A local paper with big ideas.",
  },
  {
    id: 3,
    title: "Tinned Delight",
    category: "Digital Marketing",
    img: sample3,
    excerpt: "Packaging & online campaign.",
  },
  {
    id: 4,
    title: "Dinamo",
    category: "Web Design",
    img: sample1,
    excerpt: "Bold posters and online assets.",
  },
  {
    id: 5,
    title: "3D miniatures",
    category: "Branding",
    img: sample3,
    excerpt: "Character-driven art direction.",
  },
];

export default function ProjectsSection() {
  const tabs: TabKey[] = ["All", "Branding", "Web Design", "Digital Marketing"];
  const [active, setActive] = useState<TabKey>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-6">
        Some of our recent projects
      </h2>

      <div className="mb-6">
        <div className="flex gap-6 border-b pb-3">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`text-sm pb-2 ${
                active === t
                  ? "border-b-2 border-dsPink text-dsBlue"
                  : "text-gray-600 hover:text-dsBlue"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <article
            key={p.id}
            className="relative group rounded-lg overflow-hidden shadow"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
              <div className="text-white font-semibold">{p.title}</div>
              <div className="text-sm text-white/90">{p.excerpt}</div>
              <a
                className="mt-3 inline-block bg-white/10 px-3 py-1 rounded text-white text-sm border border-white/20"
                href="#full"
              >
                Full project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
