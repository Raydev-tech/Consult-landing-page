import { Quote } from "lucide-react"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true })
  }, [])

  const testimonials = [
    {
      quote: "This was an amazing course!",
      description:
        "This was an amazing course! I can't say enough good things about it. The instructor explains everything so clearly, making learning fun and easy.",
      name: "Matt Marsh",
      role: "Student",
    },
    {
      quote: "Exceeded my expectations!",
      description:
        "The course structure and the platform design really helped me stay consistent. The live tests were exactly like the real exam, which boosted my confidence a lot.",
      name: "Natalie Jones",
      role: "Student",
    },
    {
      quote: "Learned more than I imagined!",
      description:
        "Honestly, I didn’t expect to improve this much. The high-yield questions and analytics gave me clarity about my weak areas. Totally worth it!",
      name: "David Kim",
      role: "Medical Student",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Students Are Our Biggest Fans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We don’t like to brag — but we don’t mind letting our students do it for us. 
            Here’s what they’ve said about our courses and platform.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {testimonial.quote}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {testimonial.description}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
