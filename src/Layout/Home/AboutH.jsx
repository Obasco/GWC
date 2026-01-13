
import { Award, Users, Clock, ThumbsUp } from "lucide-react";
import car2 from "../../assets/car2.jpg";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Award,
    title: "Certified Professionals",
    description: "Our team is trained and certified in professional car detailing techniques.",
  },
  {
    icon: Users,
    title: "2,000+ Happy Customers",
    description: "Join thousands of satisfied customers who trust us with their vehicles.",
  },
  {
    icon: Clock,
    title: "Fast & Efficient",
    description: "Quality service without the wait. Most services completed in under an hour.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "We're not happy until you're happy. 100% satisfaction guarantee on all services.",
  },
];

export function AboutH() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-block bg-black text-white px-4 py-2 rounded-full mb-4">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
             About  Grand Car Wash
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, Grand Car Wash has been delivering exceptional car care throughout the Greater Toronto Area. We pride ourselves on <strong>great service</strong>, <strong>quality work</strong>, and <strong>reasonable pricing</strong>, making us your one‑stop destination for all auto wash and detailing needs. Every vehicle is treated as if it were our own, with the latest techniques and technology to bring back that fresh, showroom feel.
            </p>


            <button className="bg-black text-white px-4 py-3 rounded-lg ">
              <Link to="/about">Learn More</Link>
            </button>
          </div>
          <div>
            {/* Optional Image */}
            <img
              src={car2} 
              alt="Grand Car Wash Team" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-shadow group border border-gray-200 text-center">
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
