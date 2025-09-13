import { Users, BookOpen, Award } from "lucide-react"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"

export function StatsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const stats = [
    { icon: Users, label: "Students Enrolled", value: 10000, suffix: "+" },
    { icon: BookOpen, label: "Courses", value: 200, suffix: "+" },
    { icon: Award, label: "Success Rate", value: 95, suffix: "%" },
  ]

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-3 gap-10 text-center">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="space-y-3"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 flex items-center justify-center">
              <stat.icon className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              {inView ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  suffix={stat.suffix}
                />
              ) : (
                "0"
              )}
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
