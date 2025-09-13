import React from "react";
import { Headset, CheckCircle } from "lucide-react"; // Lucide icons

export function Support() {
  const supportTeam = [
    { name: "Kathy Schneider", role: "Support" },
    { name: "Support Specialist", role: "Support" },
    { name: "Robert Wilson", role: "Support" },
    { name: "Support Specialist", role: "Support" },
  ];

  return (
    <section className="py-20 bg-white" id="support">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Stats */}
          <div className="space-y-10" data-aos="fade-right">
            <div className="text-center">
              <div className="w-32 h-32 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <Headset className="w-6 h-6 text-indigo-600" />
                24/7 Support
              </h3>
              <div className="space-y-4">
                {supportTeam.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    <div className="w-10 h-10 bg-indigo-200 flex items-center justify-center rounded-full">
                      <CheckCircle className="text-indigo-600 w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {member.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {member.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Tests Completed</div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-4xl font-bold text-gray-900 leading-snug">
              Let us handle the <span className="text-indigo-600">best</span>.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our dedicated support team ensures you get the help you need,
              whenever you need it. We’re committed to delivering top-notch
              service and customer satisfaction.
            </p>
            <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300">
              Contact Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
