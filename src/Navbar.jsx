import React, { useState } from "react";
import logo from "../src/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white w-full border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Brand (LEFT) */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="GrandWash logo" className="w-10 h-10" />
          <h2 className="text-2xl font-medium">GrandWash</h2>
        </div>

        {/* Nav Links (CENTER - Desktop) */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          {["About", "Services", "Gallery", "Contact"].map((item) => (
            <li
              key={item}
              className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* CTA Button (RIGHT - Desktop) */}
        <div className="hidden md:block">
          <button className="bg-black text-white rounded-3xl px-6 py-2 hover:opacity-90 transition">
            Book Now
          </button>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
            {["About", "Services", "Gallery", "Contact"].map((item) => (
              <li
                key={item}
                className="border-b pb-2"
                onClick={() => setOpen(false)}
              >
                {item}
              </li>
            ))}
            <button className="mt-4 bg-black text-white rounded-3xl px-6 py-2">
              Book Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
