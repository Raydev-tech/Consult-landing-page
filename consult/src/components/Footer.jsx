import React, { useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-16" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Columns */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div data-aos="fade-up" className="space-y-4">
            <h3 className="text-2xl font-bold">Prepnepal</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students to prepare smarter and achieve their academic
              goals with curated tests, resources, and expert insights.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
            <h4 className="font-semibold text-white">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Courses", "Test", "Contact Us"].map((link, i) => (
                <li key={i}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
            <h4 className="font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              {["Blog", "News and Updates", "Career"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Up to Date */}
          <div data-aos="fade-up" data-aos-delay="300" className="space-y-4">
            <h4 className="font-semibold text-white">Stay up to date</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Subscribe to our newsletter and never miss updates about new
              courses, exam prep tips, and student success stories.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded-l-md text-gray-900 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-sm rounded-r-md hover:bg-indigo-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Prepnepal. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
