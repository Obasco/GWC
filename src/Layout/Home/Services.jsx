import { Sparkles, Droplets, Car, Shield, Scissors, Wind } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Hand Car Wash",
    description: "Gentle, thorough hand wash for a spotless exterior finish.",
  },
  {
    icon: Sparkles,
    title: "Interior Detailing",
    description: "Vacuuming, wiping, and deep cleaning of all interior surfaces.",
  },
  {
    icon: Car,
    title: "Leather Treatment",
    description: "Restores and protects leather seats for a rich, clean look.",
  },
  {
    icon: Shield,
    title: "Headlight Restoration",
    description: "Clears foggy or yellowed headlights for improved visibility.",
  },
  {
    icon: Scissors,
    title: "Mobile Detailing",
    description: "Full car cleaning and detailing at your location for convenience.",
  },
  {
    icon: Wind,
    title: "Ceramic Coating",
    description: "Adds long-lasting protection and shine to your vehicle’s paint.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-black text-white px-4 py-2 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Complete Car Care Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From quick washes to full detailing, we offer a range of services to keep your vehicle looking its best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow group border border-gray-200"
              >
                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
