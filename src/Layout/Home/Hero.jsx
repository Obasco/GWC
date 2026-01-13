import React from "react";
import car from "../../assets/car.png";
import { CardSim, Bubbles, CarTaxiFront, Snowflake } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="poppins text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight">
            Keep Your Car Looking Brand-New
          </h1>

          {/* ICON ROW */}
          <div className="mt-6 flex gap-4">
            {[CardSim, Bubbles, CarTaxiFront, Snowflake].map((Icon, i) => (
              <div
                key={i}
                className={`w-12 h-12 flex items-center justify-center rounded-full ${
                  i % 2 === 0
                    ? "bg-black text-white"
                    : "bg-white border-2 border-black text-black"
                }`}
              >
                <Icon size={22} />
              </div>
            ))}
          </div>

          {/* SUBTEXT */}
          <p className="mt-6 text-gray-500 text-lg max-w-xl">
            Premium car care designed to keep your vehicle spotless, protected,
            and looking its best — every single day.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-black text-white rounded-3xl px-7 py-3 shadow-lg shadow-black/30 hover:shadow-xl hover:scale-[1.02] transition">
              Book Your Wash
            </button>

            <button className="bg-white text-black border-2 border-black rounded-3xl px-7 py-3 shadow-md hover:shadow-lg hover:scale-[1.02] transition">
              <Link to="/service">Explore Services</Link>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src={car}
            alt="Clean car"
            className="w-full max-w-xl lg:max-w-3xl xl:max-w-4xl object-contain drop-shadow-2xl lg:translate-x-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
