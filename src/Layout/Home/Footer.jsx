import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 rounded-t-4xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">Grand Car Wash</h2>
          <p className="text-gray-400">
            Professional car detailing and wash services to keep your car
            looking its best.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#packages"
                className="hover:text-white transition-colors"
              >
                Packages
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-white" />
              780 Unit 4. Markham Rd, Scarborough, ON M1H 2A9
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-white" />
              <a href="tel:+14167578200" className="hover:underline">
                (416) 757‑8200
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-white" />
              <a
                href="mailto:info@grandcarwash.ca"
                className="hover:text-white"
              >
                info@grandcarwash.ca
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Grand Car Wash. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
