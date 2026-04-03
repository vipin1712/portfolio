import React, { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { RiPhoneLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // EmailJS init
  useEffect(() => {
    emailjs.init("qK4GteKBgs8sFXPAo"); // put your public key here
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_o5upujq", "template_ofs3b9q", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message!");
          setLoading(false);
        }
      );
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Vipin, I visited your portfolio and would like to connect with you."
  );

  return (
    <footer className="bg-gray-900 text-white py-8" id="footer">
      <div className="max-w-6xl mx-auto px-4">
        <div className="md:flex md:justify-around">
          
          {/* Contact Form */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Have a Query?</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                required
                className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 py-2 rounded-lg flex justify-center"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>

            <div className="flex space-x-4">
              <a href="tel:+918004828716">
                <RiPhoneLine className="text-2xl hover:text-blue-500" />
              </a>

              <a
                href={`https://wa.me/918004828716?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="text-2xl hover:text-green-500" />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-blue-600" />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">
          © 2026 Vipin Kumar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;