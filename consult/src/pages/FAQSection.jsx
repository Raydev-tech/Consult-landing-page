import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export function FAQSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const faqs = [
    { q: "How do I enroll?", a: "Simply sign up, choose your course, and start learning instantly." },
    { q: "Is it free?", a: "We offer both free and premium courses depending on your needs." },
    { q: "Can I access materials offline?", a: "Yes, you can download notes and study materials for offline use." },
    { q: "Do you provide certificates?", a: "Yes! Certificates are available after completing premium courses." },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm p-5"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <button
                className="w-full flex justify-between items-center text-left font-medium text-gray-900"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === i && (
                <p className="mt-3 text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
