import React from "react";
import { ShoppingCart } from "lucide-react"; // Lucide icon

export function Pricing() {
  const pricingPlans = [
    {
      title: "Physiology Test",
      subtitle: "MBBS",
      price: "Rs. 100",
      description:
        "Prepare for your Physiology exam with focused tests and detailed analytics to help you master key concepts.",
    },
    {
      title: "Pathology Test",
      subtitle: "MBBS",
      price: "Rs. 100",
      description:
        "Sharpen your understanding of Pathology with structured tests that mimic real exam conditions.",
    },
    {
      title: "Cardiology Test",
      subtitle: "MBBS",
      price: "Rs. 100",
      description:
        "Ace your Cardiology exams with our high-yield practice tests and expert-designed questions.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fair & Simple Pricing For All
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the package that fits your study goals. Simple, affordable, and effective.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col items-center text-center"
            >
              <h3 className="text-xl font-bold text-gray-900">{plan.title}</h3>
              <div className="text-sm text-gray-600 mb-2">{plan.subtitle}</div>
              <div className="text-4xl font-extrabold text-indigo-600 mb-6">
                {plan.price}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {plan.description}
              </p>
              <button className="mt-6 w-full flex items-center justify-center gap-2 border border-indigo-600 text-indigo-600 py-2 px-4 rounded-lg hover:bg-indigo-600 hover:text-white transition">
                <ShoppingCart className="w-5 h-5" />
                Buy Now
              </button>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="text-center mt-12" data-aos="zoom-in">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
            View All Packages
          </button>
        </div>
      </div>
    </section>
  );
}
