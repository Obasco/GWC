import React from "react";
import { Link } from "react-router-dom";
import video from "../../assets/video.mp4";
import TextType from "../../component/TextType.jsx";


const Hero = () => {

  const words = [
    "Keep Your Car Looking Brand-New",
    "Experience the Ultimate Clean",
    "Drive in Style with GrandWash",
    "Your Car Deserves the Best Care",
  ];
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center mt-20">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <h1 className="poppins text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight text-white">
              <TextType cursorCharacter="|" text={words} />
              {/* Keep Your Car Looking Brand-New */}
            </h1>

            <p className="mt-6 text-gray-200 text-base sm:text-lg leading-relaxed mb-10">
              Premium car care designed to keep your vehicle spotless,
              protected, and looking its best — every single day.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 mb-10">
              <a
                href="https://orbisx.ca/app/booknow/VSS4D"
                className="bg-white text-black rounded-3xl px-8 py-3 font-medium hover:opacity-90 transition"
              >
                Book Your Wash
              </a>

              <Link
                to="/service"
                className="border border-white text-white rounded-3xl px-8 py-3 font-medium hover:bg-white hover:text-black transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




// <section className="bg-white relative overflow-hidden">
//   <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//     {/* LEFT CONTENT */}
//     <div>
//       <h1 className="poppins text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight">
//         Keep Your Car Looking Brand-New
//       </h1>

//       {/* ICON ROW */}
//       <div className="mt-6 flex gap-4">
//         {[CardSim, Bubbles, CarTaxiFront, Snowflake].map((Icon, i) => (
//           <div
//             key={i}
//             className={`w-12 h-12 flex items-center justify-center rounded-full ${
//               i % 2 === 0
//                 ? "bg-black text-white"
//                 : "bg-white border-2 border-black text-black"
//             }`}
//           >
//             <Icon size={22} />
//           </div>
//         ))}
//       </div>

//       {/* SUBTEXT */}
//       <p className="mt-6 text-gray-500 text-lg max-w-xl">
//         Premium car care designed to keep your vehicle spotless, protected,
//         and looking its best — every single day.
//       </p>

//       {/* BUTTONS */}
//       <div className="mt-8 flex flex-wrap gap-4">
//         <button className="bg-black text-white rounded-3xl px-7 py-3 shadow-lg shadow-black/30 hover:shadow-xl hover:scale-[1.02] transition">
//           Book Your Wash
//         </button>

//         <button className="bg-white text-black border-2 border-black rounded-3xl px-7 py-3 shadow-md hover:shadow-lg hover:scale-[1.02] transition">
//           <Link to="/service">Explore Services</Link>
//         </button>
//       </div>
//     </div>

//     {/* RIGHT IMAGE */}
//     <div className="relative flex justify-center lg:justify-end">
//       <img
//         src={car}
//         alt="Clean car"
//         className="w-full max-w-xl lg:max-w-3xl xl:max-w-4xl object-contain drop-shadow-2xl lg:translate-x-10"
//       />
//     </div>
//   </div>
// </section>
