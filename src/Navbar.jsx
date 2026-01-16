import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="GrandWash logo" className=""  width={100} height={100}/>
          <h2
            className={`text-2xl font-medium ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            GRAND CARWASH SCARBOROUGH
          </h2>
        </Link>

        {/* Desktop Links */}
        <ul
          className={`hidden md:flex gap-8 font-medium ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          {[
            { name: "About", path: "/about" },
            { name: "Services", path: "/service" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.path} className="relative group">
              <Link to={item.path}>{item.name}</Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-current transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://orbisx.ca/app/booknow/VSS4D"
            className={`rounded-3xl px-6 py-2 transition ${
              scrolled
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden text-2xl ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
            {[
              { name: "About", path: "/about" },
              { name: "Services", path: "/service" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.path} onClick={() => setOpen(false)}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
            <a
              href="https://orbisx.ca/app/booknow/VSS4D"
              className="mt-4 bg-black text-white rounded-3xl px-6 py-2 text-center"
            >
              Book Now
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
