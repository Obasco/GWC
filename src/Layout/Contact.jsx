import React, { useState } from "react";
import Navbar from "../Navbar";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Footer from "./Home/Footer";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const contactDetails = [
    { icon: MapPin, title: "Location", info: "780 Unit 4. Markham Rd, Scarborough, ON M1H 2A9" },
    { icon: Phone, title: "Phone", info: "(416) 757-8200" },
    { icon: Mail, title: "Email", info: "info@grandwash.ca" },
    { icon: Clock, title: "Hours", info: "Mon - Sun: 9:00 AM - 6:00 PM" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/xjggveep", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    navigate("/verify");

    setTimeout(() => {
      navigate("/contact");
    }, 4000);
  };

  return (
    <>
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* CONTACT INFO */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-2">Reach Out To Us</h1>
            <p className="text-gray-500 mb-8">Feel free to contact us for inquiries, bookings, or support.</p>

            <div className="space-y-6">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-black/5 rounded-xl">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{detail.title}</h3>
                      <p className="text-gray-500 text-sm">{detail.info}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <iframe
              className="w-full h-72 mt-8 rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.021965471286!2d-79.2272585!3d43.7575037"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* FORM */}
          <div className="bg-black rounded-2xl shadow-lg p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">Contact Form</h1>
            <p className="text-gray-300 mb-8">Send us a message and our team will respond shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="New Contact Form Submission" />

              <div>
                <label className="block text-sm mb-1">Email</label>
                <input required name="email" type="email" className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/30 focus:border-white focus:outline-none" />
              </div>

              <div>
                <label className="block text-sm mb-1">Name</label>
                <input required name="name" type="text" className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/30 focus:border-white focus:outline-none" />
              </div>

              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea required name="message" rows="5" className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/30 focus:border-white focus:outline-none resize-none" />
              </div>

              <button type="submit" disabled={loading} className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 transition disabled:opacity-50">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;