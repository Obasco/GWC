import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-black text-white px-4 py-2 rounded-full mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Visit Us or Book Your Package
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stop by our Toronto location or schedule an appointment online for your preferred detailing package.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info + Map */}
          <div className="space-y-8">
            <div className="bg-black p-8 rounded-2xl text-white">
              <h3 className="text-2xl mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <div className="text-gray-300">
                      828 Eastern Ave, Toronto, ON M4L 1A1
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <div className="text-gray-300">
                      <a href="tel:+14164699655" className="hover:underline">
                        (416) 469‑9655
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-gray-300">
                      <a href="mailto:info@grandcarwash.ca" className="hover:underline">
                        info@grandcarwash.ca
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">Hours</div>
                    <div className="text-gray-300">
                      Mon - Sun: 9:00 AM - 6:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-gray-200">
              <iframe
                title="Grand Car Wash Toronto Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.021530043128!2d-79.34922268450336!3d43.664993579121575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b8a915c69f%3A0xe74634b1c9a2e0dc!2sGrand%20Car%20Wash%20Toronto!5e0!3m2!1sen!2sca!4v1696491367456!5m2!1sen!2sca"
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl text-gray-900 mb-6">Book Your Package</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                  placeholder="(416) 469‑9655"
                />
              </div>

              <div>
                <label htmlFor="package" className="block text-gray-700 mb-2">
                  Select Package
                </label>
                <select
                  id="package"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all"
                >
                  <option>Bronze - $59</option>
                  <option>Silver - $89</option>
                  <option>Gold - $119</option>
                  <option>Platinum - $149</option>
                  <option>Showroom Detail - $179</option>
                  <option>Diamond - $299</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/20 outline-none transition-all resize-none"
                  placeholder="Any special requests or questions?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Book Package
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
