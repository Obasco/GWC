import React from "react";
import Navbar from "../Navbar";
import Footer from "./Home/Footer";
import { Flag, MapPin, Users, Leaf, Star } from "lucide-react";
import Labo from "../assets/labo.jpg"
import SplitText from "../component/SplitText";
import CountUp from "../components/CountUp";

const testimonials = [
  {
    name: "Sarah T.",
    role: "Scarborough, ON",
    review:
      "They did an incredible job on my SUV. Interior and exterior were spotless. Highly recommend!",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Mike L.",
    role: "Toronto, ON",
    review:
      "Fast, professional, and worth every dollar. My car looks brand new every time I come here.",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Emily R.",
    role: "Markham, ON",
    review:
      "Attention to detail is unmatched. You can tell they actually care about the work.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 opacity-40">
          <img
          src={Labo}
            //src="https://images.unsplash.com/photo-1690049585211-fe8f5178fd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGx1eHVyeSUyMGNhcnxlbnwxfHx8fDE3NjgxNjcwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Clean luxury car"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <SplitText
          text = "About Us"
          className="text-5xl md:text-7xl tracking-wider mb-4"
           />
          {/* <h1 >About Us</h1> */}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl mb-8 tracking-wide">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Grand Car Wash was built on one simple belief — every vehicle
              deserves professional care and attention to detail. Located in
              the heart of Scarborough, we’ve proudly served our community
              with reliable, high-quality car wash and detailing services for
              years.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              What started as a local car wash quickly became a trusted
              destination for drivers who value craftsmanship, consistency,
              and honest pricing. From daily drivers to luxury vehicles, we
              treat every car as if it were our own.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our experienced team uses professional-grade equipment, premium
              products, and proven techniques to deliver outstanding results —
              whether it’s a quick exterior wash or a full showroom-level
              detail. At Grand Car Wash, quality isn’t an option — it’s the
              standard.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1605437241278-c1806d14a4d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkZXRhaWxpbmd8ZW58MXx8fHwxNzY4MTY3MDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Car detailing"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-8 tracking-wide">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            At Grand Car Wash, our mission is simple — to deliver reliable,
            high-quality car wash and detailing services with honesty,
            consistency, and attention to detail. We aim to exceed
            expectations every visit while providing fair pricing and
            professional care for every vehicle.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="border-2 border-black p-8 rounded-2xl">
              <Flag className="mx-auto mb-4" size={40} />
              <div className="text-5xl mb-2">
                <CountUp from={1000} direction="up" to={2010} suffix="+" duration={2} />
              </div>
              <p className="text-gray-600">Established</p>
            </div>
            <div className="border-2 border-black p-8 rounded-2xl">
              <MapPin className="mx-auto mb-4" size={40} />
              <div className="text-5xl mb-2">1</div>
              <p className="text-gray-600">Scarborough Location</p>
            </div>
            <div className="border-2 border-black p-8 rounded-2xl">
              <Users className="mx-auto mb-4" size={40} />
              <div className="text-5xl mb-2">
                <CountUp from={0} direction="up" to={30000} suffix="+" duration={2} />
              </div>
              <p className="text-gray-600">Satisfied Customers</p>
            </div>
            <div className="border-2 border-black p-8 rounded-2xl">
              <Leaf className="mx-auto mb-4" size={40} />
              <div className="text-5xl mb-2">Eco</div>
              <p className="text-gray-600">Responsible Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-linear-to-b from-white to-gray-100 py-32 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-black blur-3xl opacity-[0.04]" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-black blur-3xl opacity-[0.04]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full border border-black/10 mb-6">
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
              <span className="text-sm font-semibold tracking-wide">
                CUSTOMER REVIEWS
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              What Our{" "}
              <span className="bg-linear-to-r from-black to-gray-600 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Honest feedback from customers who trust Grand Car Wash with their vehicles.
            </p>

            <div className="w-16 h-1 bg-black mx-auto mt-8 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-black/10 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-black/3opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-black text-black" />
                    ))}
                  </div>

                  <p className="text-black italic leading-relaxed mb-6">“{item.review}”</p>

                  <div className="h-px w-full bg-black/10 mb-6" />

                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-black/20"
                    />
                    <div>
                      <h3 className="font-bold text-black">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
    