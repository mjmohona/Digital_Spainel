import { useEffect, useRef, useState } from "react";
import logoUrl from "./../assets/logo01-01.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current && current > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="bg-white/95 backdrop-blur border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={logoUrl} alt="Digital Spaniel" className="h-8 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a
              className="relative pb-1 hover:text-dsBlue transition"
              href="#services"
            >
              <span>Services</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-dsPink transition-all group-hover:w-full" />
            </a>
            <a href="#work" className="hover:text-dsBlue">
              Work
            </a>
            <a href="#about" className="hover:text-dsBlue">
              About
            </a>
            <a href="#blog" className="hover:text-dsBlue">
              Blog
            </a>
            <a href="#contact" className="hover:underline text-sm">
              Contact
            </a>
          </nav>

          {/* mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="p-2 rounded hover:bg-gray-100"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="#0f2b3b"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* mobile slide down */}
        <div
          className={`md:hidden bg-white border-t ${open ? "block" : "hidden"}`}
        >
          <div className="px-6 py-4 space-y-3">
            <a className="block" href="#services">
              Services
            </a>
            <a className="block" href="#work">
              Work
            </a>
            <a className="block" href="#about">
              About
            </a>
            <a className="block" href="#blog">
              Blog
            </a>
            <a className="block" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
