import React, { useEffect } from "react";
import { BookOpen, Clock, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const courses = [
  {
    id: 1,
    title: "IELTS Preparation",
    description: "Master IELTS with mock tests, speaking practice, and expert tips.",
    duration: "3 Months",
    rating: 4.8,
    students: 1200,
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80" // students studying with books
  },
  {
    id: 2,
    title: "Loksewa Preparation",
    description: "Crack Loksewa exams with structured lessons and practice sets.",
    duration: "6 Months",
    rating: 4.7,
    students: 2000,
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80" // classroom / exam prep
  },
  {
    id: 3,
    title: "Computer Basics",
    description: "Learn MS Office, Internet, and IT fundamentals for beginners.",
    duration: "2 Months",
    rating: 4.5,
    students: 1500,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" // computer lab
  }
];


const CoursesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Popular Courses
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from a wide variety of test prep and skill-building courses
          designed to help you succeed in your academic and professional journey.
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-900">
                {course.title}
              </h3>
              <p className="text-sm text-gray-600">{course.description}</p>

              <div className="flex items-center text-gray-500 text-sm gap-4">
                <span className="flex items-center gap-1">
                  <Clock size={16} /> {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-500" /> {course.rating}
                </span>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">
                  {course.students}+ students
                </span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
