import React, { useEffect } from "react";
import { Search, Users, CheckCircle2, BookOpen } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";
import { Support } from "./Support";
import { Pricing } from "./Pricing";
import CoursesPage from "./CoursesPage";
import { ResourcesPage } from "./ResourcesPage";
import { StatsSection } from "./StatsSection";
import { FAQSection } from "./FAQSection";

export function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Welcome to <span className="text-indigo-600">Prepnepal.</span>{" "}
                <br />
                Prepare with confidence.
              </h1>
              <p className="text-lg text-gray-600">
                Excel in every exam with our high-yield{" "}
                <span className="text-indigo-600 font-semibold">MCQs</span> and
                trusted resources.
              </p>
            </div>

            {/* Search Input */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="text"
                placeholder="Search courses or exams"
                className="flex-1 px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
                <Search size={18} />
                Search
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6">
              {/* Avatars */}
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/81.jpg"
                  alt="Team member"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/82.jpg"
                  alt="Team member"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/83.jpg"
                  alt="Team member"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/82.jpg"
                  alt="Team member"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              </div>

              {/* Text + Icon */}
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <Users size={18} className="text-indigo-600" />
                <span className="font-semibold">50+ Creative Team</span>
              </div>
            </div>

            <div className="flex items-center space-x-10 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={22} className="text-green-600" />
                <div>
                  <span className="font-bold text-2xl text-gray-900">100%</span>
                  <div>Satisfied Students</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={22} className="text-indigo-600" />
                <div>
                  <span className="font-bold text-2xl text-gray-900">
                    100k+
                  </span>
                  <div>Questions Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative" data-aos="fade-left">
            <img
              src="https://plus.unsplash.com/premium_photo-1661590907642-9683c2035d2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U3R1ZGVudCUyMHN0dWR5aW5nJTIwd2l0aCUyMGNvbmZpZGVuY2V8ZW58MHx8MHx8fDA%3D"
              alt="Student studying with confidence"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <div className="text-sm font-semibold">500+</div>
              <div className="text-xs">Free Courses</div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white px-4 py-2 rounded-lg shadow-lg border">
              <div className="text-sm font-semibold">100k+</div>
              <div className="text-xs text-gray-600">MCQs Available</div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <CoursesPage />
      <ResourcesPage />
      <StatsSection />
      <Testimonials />
      <Support />
      <Pricing />
      <FAQSection />
    </section>
  );
}
