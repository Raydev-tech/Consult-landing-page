import { BookOpen, Target, BarChart3 } from "lucide-react"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export function Services() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true })
  }, [])

  const services = [
    {
      icon: BookOpen,
      title: "Live Tests",
      description:
        "Register in a single click and prepare for the exam of your choice with our interactive live test series.",
    },
    {
      icon: Target,
      title: "High Yield Questions",
      description:
        "Access the most important and frequently asked questions curated to maximize your exam success.",
    },
    {
      icon: BarChart3,
      title: "Insightful Analytics",
      description:
        "Track your performance with detailed analytics and gain insights to improve every step of the way.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tailored tools and features designed to help you excel in your exams with confidence.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="text-center p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            >
              {/* Icon with gradient circle */}
              <div className="w-20 h-20 bg-gradient-to-tr from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <service.icon className="w-10 h-10 text-indigo-600" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mt-6">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base mt-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
