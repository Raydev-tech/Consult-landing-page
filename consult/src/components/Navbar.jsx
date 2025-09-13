import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="w-full   fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center justify-between h-16"
          data-aos="fade-down"
        >
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600">
                <a href="/">
              Prepnepal<span className="text-gray-900"></span>
               </a>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100 transition cursor-pointer">
                <a href="/login">
              Sign In
              </a>
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition cursor-pointer">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          data-aos="fade-down"
        >
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="block text-gray-700 hover:text-indigo-600 transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <button className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition">
                Sign In
              </button>
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
