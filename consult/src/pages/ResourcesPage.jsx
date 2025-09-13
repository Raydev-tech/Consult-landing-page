import { BookOpen, Newspaper, FileText, Video } from "lucide-react"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export function ResourcesPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const resources = [
    {
      id: 1,
      title: "Exam Strategy Guides",
      description: "Step-by-step strategies to crack Loksewa, Banking, IELTS, and more.",
      icon: BookOpen,
      link: "#",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Latest News & Updates",
      description: "Stay updated with the latest exam announcements and changes.",
      icon: Newspaper,
      link: "#",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1000&q=80", // news reading
    },
    {
      id: 3,
      title: "Sample Papers & Notes",
      description: "Download high-yield notes, past papers, and practice materials.",
      icon: FileText,
      link: "#",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Video Tutorials",
      description: "Learn difficult concepts easily through interactive video lessons.",
      icon: Video,
      link: "#",
      image: "https://images.unsplash.com/photo-1747572939295-209569c4eec6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFZpZGVvJTIwVHV0b3JpYWxzfGVufDB8fDB8fHww", // online class
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access guides, notes, videos, and updates to help you succeed in your exams.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <a
              key={resource.id}
              href={resource.link}
              className="group bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <resource.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
