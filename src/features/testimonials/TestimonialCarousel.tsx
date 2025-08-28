import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchTestimonials } from "./testimonialSlice";

export default function TestimonialCarousel() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((s) => s.testimonials.items);
  const status = useAppSelector((s) => s.testimonials.status);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchTestimonials());
  }, [dispatch]);

  // auto-advance
  useEffect(() => {
    if (items.length === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, 4000);
    return () => clearInterval(id);
  }, [items.length]);

  if (status === "loading" || items.length === 0) {
    return (
      <div className="py-12 text-center">
        <div className="text-gray-500">Loading testimonials…</div>
      </div>
    );
  }

  const active = items[index];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="relative">
        <blockquote className="bg-white rounded-xl p-8 shadow-md text-center">
          <p className="text-gray-800 italic leading-relaxed">{active.quote}</p>
          <footer className="mt-6 flex items-center justify-center gap-4">
            <img
              src={active.avatar}
              alt={active.name}
              className="w-14 h-14 rounded-full object-cover ring-2 ring-white shadow"
            />
            <div className="text-left">
              <div className="font-semibold text-gray-900">{active.name}</div>
              <div className="text-sm text-gray-500">{active.role}</div>
            </div>
          </footer>
        </blockquote>

        {/* pager dots */}
        <div className="mt-6 flex justify-center items-center gap-3">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-3 h-3 rounded-full focus:outline-none ${
                i === index ? "bg-dsBlue" : "bg-gray-300"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
