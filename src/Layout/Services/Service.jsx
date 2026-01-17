import { Check } from 'lucide-react';
import Navbar from '../../Navbar';
import Footer from '../Home/Footer';
import Labo from "../../assets/labo.jpg"
import SplitText from "../../component/SplitText";
export default function service() {
  const services = [
    {
      name: 'DIAMOND PACKAGE',
      category: 'Ultimate Finish',
      description:
        'Turn back the hands of time with this all-inclusive package. A full body stage 1 paint correction removes defects and swirls from the exterior, including headlight restoration, shedding years from the appearance of your car.',
      features: [
        'Stage 1 Paint Correction',
        'Swirl & Defect Removal',
        'Headlight Restoration',
        'Full Interior & Exterior Detail',
        'Showroom-level Finish'
      ],
      time: 'Full Day Service',
      price: 'Sedan $299 / SUV $319',
      image:"https://static.wixstatic.com/media/f64cec_ba555a4f36a640e786029370ef63395b~mv2.jpg/v1/fill/w_946,h_946,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f64cec_ba555a4f36a640e786029370ef63395b~mv2.jpg"
    },
    {
      name: 'SHOWROOM PACKAGE',
      category: 'Top Level Detail',
      description:
        'Revitalize your car back to brand-new condition with our top-level interior detailing, roof shampoo, seatbelts, and special exterior hand-applied premium carnauba wax.',
      features: [
        'Deep Interior Detail',
        'Roof & Seat Shampoo',
        'Premium Carnauba Wax',
        'Engine Bay Detail',
        'Care for Electric Components'
      ],
      time: '3–4 Hours',
      price: 'Sedan $179 / SUV $189',
      image:"https://images.unsplash.com/photo-1761312834150-4beefff097a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXNoJTIwZm9hbXxlbnwxfHx8fDE3NjgxNjcwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: 'PLATINUM PACKAGE',
      category: 'In-Depth Clean',
      description:
        'Comprehensive interior detailing including all features found in the Gold package, plus specialty hand-applied carnauba-based wax sealant for a sleek, wet look.',
      features: [
        'Complete Interior Detail',
        'Gold Package Features',
        'Wax Sealant Protection',
        'Enhanced Shine Finish'
      ],
      time: '2–3 Hours',
      price: 'Sedan $149 / SUV $179',
      image :"https://images.unsplash.com/photo-1656077885491-3922185f3932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGNsZWFuaW5nfGVufDF8fHx8MTc2ODE2NzA3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: 'GOLD PACKAGE',
      category: 'Grand Special',
      description:
        'Formerly known as our Grand Special. Includes full interior detailing using hot water extraction, deep stain removal, and a complimentary premium exterior wash.',
      features: [
        'Hot Water Extraction',
        'Carpet & Upholstery Shampoo',
        'Vent & Crack Detailing',
        'Premium Exterior Wash'
      ],
      time: '2 Hours',
      price: 'Sedan $119 / SUV $129',
      image:"https://images.unsplash.com/photo-1755279217102-947755911799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3YXglMjBwb2xpc2h8ZW58MXx8fHwxNzY4MTU4MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: 'BRONZE PACKAGE',
      category: 'Essential Clean',
      description:
        'Traditional in-and-out cleaning including vacuum, interior wipe-down, vinyl shine, and full exterior wash and dry.',
      features: [
        'Interior Vacuum',
        'Wipe-Down & Vinyl Shine',
        'Exterior Wash & Dry'
      ],
      time: '60–90 min',
      price: 'Sedan $59 / SUV $69',
      image:"https://images.unsplash.com/photo-1694678505383-676d78ea3b96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhciUyMGRldGFpbGluZ3xlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  const addons = [
    { name: 'Headlight / Taillight Restoration (pair)', price: '$60' },
    { name: 'Interior Shampoo', price: '$84 / $94' },
    { name: 'Hot Water Extraction (Salt Removal)', price: '$29' },
    { name: 'Outside Wash', price: '$35 / $40' },
    { name: 'Section Shampoo', price: '$29' },
    { name: 'Carnauba Hand Wax', price: '$59' },
    { name: 'Spot Buff', price: '$40' },
    { name: 'Pet Hair Removal', price: '$30' },
    { name: 'Rims Detail', price: '$15' }
  ];

  return (
    <>
    <Navbar />

    <div className="min-h-screen bg-white">
      {/* Hero */}

      
        <section className="relative h-[60vh] flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0 opacity-40">
          <img
          src={Labo}
            // src="https://images.unsplash.com/photo-1690049585211-fe8f5178fd0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGx1eHVyeSUyMGNhcnxlbnwxfHx8fDE3NjgxNjcwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Clean luxury car"
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <SplitText

          text = "Our Service"
          className="text-5xl md:text-7xl tracking-wider mb-4"
           />
           {/* <h1 className="text-5xl md:text-7xl tracking-wider mb-4">Our Services</h1> */}
           <SplitText 
            text = "Attention to Detail, Priced Just Right"
            className="text-xl text-gray-300 tracking-wide"
          />
        </div>
      </section>


      {/* Packages */}
        <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="relative h-96 bg-black">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="text-sm tracking-widest text-gray-500 mb-2">
                  {service.category}
                </div>
                <h2 className="text-4xl md:text-5xl mb-6 tracking-wider">
                  {service.name}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-gray-600"
                    >
                      <Check size={20} className="mr-3 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t-2 border-black pt-6">
                  <div>
                    <div className="text-3xl tracking-wide mb-1">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.time}</div>
                  </div>
                  <button className="bg-black text-white px-8 py-3 tracking-wide hover:bg-gray-800 transition-colors">
                   <a href="https://orbisx.ca/app/booknow/VSS4D">
                   BOOK NOW
                   </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Singles */}
      <section className="py-24 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 tracking-wide text-center">
            SINGLE SERVICES
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="bg-white p-6 border-2 border-black flex justify-between items-center"
              >
                <span>{addon.name}</span>
                <span className="text-xl">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>

    <Footer />

    </>
  );
}
