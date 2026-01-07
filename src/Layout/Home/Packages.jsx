import { Check } from "lucide-react";

const packages = [
  {
    name: "Bronze",
    price: "$59",
    description: "Complete interior refresh & exterior hand wash",
    features: [
      "Vacuuming and air cleaning",
      "Rubber mat restoration",
      "Interior wipe-down",
      "Full exterior wash & dry"
    ],
    popular: false
  },
  {
    name: "Silver",
    price: "$89",
    description: "Standard interior & premium exterior detailing",
    features: [
      "Interior detailing of consoles, doors, dashboard",
      "Leather & vinyl enhancement",
      "Premium hand wash",
      "Crystal-clear window cleaning"
    ],
    popular: true
  },
  {
    name: "Gold",
    price: "$119",
    description: "Deep cleaning with meticulous interior & exterior care",
    features: [
      "Deep salt & stain removal",
      "Full interior detailing including vents",
      "Signature exterior finish",
      "Premium waxing for shine"
    ],
    popular: false
  },
  {
    name: "Platinum",
    price: "$149",
    description: "Gold services plus long-lasting protection & full upholstery shampoo",
    features: [
      "Everything in Gold",
      "Carnauba wax sealant",
      "Full upholstery shampoo",
      "Mats, seats, carpets, and trunk"
    ],
    popular: false
  },
  {
    name: "Showroom Detail",
    price: "$179",
    description: "Elite full-service detailing inside, outside & under hood",
    features: [
      "Full interior revival including roof & seatbelts",
      "Carnauba wax application",
      "Engine bay detailing",
      "Flawless exterior finish"
    ],
    popular: false
  },
  {
    name: "Diamond",
    price: "$299",
    description: "Ultimate package with paint correction & showroom-level finish",
    features: [
      "Stage 1 paint correction",
      "Headlight restoration",
      "Meticulous full-service detailing",
      "Ultimate showroom finish"
    ],
    popular: false
  }
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-black text-white px-4 py-2 rounded-full mb-4">
            Our Packages
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Choose the Perfect Detailing Package
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From quick clean-ups to full restoration, we have a package tailored to your car's needs.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl ${
                pkg.popular
                  ? "bg-black text-white shadow-2xl scale-105"
                  : "bg-white text-gray-900 border border-gray-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl mb-2">{pkg.name}</h3>
                <p className={pkg.popular ? "text-gray-300" : "text-gray-600"}>
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-3xl md:text-4xl font-bold">{pkg.price}</span>
                  <span className={`ml-2 ${pkg.popular ? "text-gray-300" : "text-gray-600"}`}>
                    /service
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      pkg.popular ? "text-gray-300" : "text-black"
                    }`} />
                    <span className={pkg.popular ? "text-gray-100" : "text-gray-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full transition-colors ${
                  pkg.popular
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
    