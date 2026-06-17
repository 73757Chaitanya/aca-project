import { useNavigate } from "react-router-dom";

import javaLogo from "../assets/modular/java.png";
import pythonLogo from "../assets/modular/python.png";
import springLogo from "../assets/modular/springboot.png";
import reactLogo from "../assets/modular/react.png";
import mernLogo from "../assets/modular/mern.png";
import dsaLogo from "../assets/modular/dsa.png";
import devopsLogo from "../assets/modular/devops.png";
import genaiLogo from "../assets/modular/genai.png";

function ModularCourses() {
  const navigate = useNavigate();

  const courses = [
    {
      name: "Core Java",
      icon: javaLogo,
      batch: "July 2026",
      duration: "6 Weeks",
      fee: "₹7000",
      seats: "20",
      badge: "LIVE",
    },
    {
      name: "Python",
      icon: pythonLogo,
      batch: "July 2026",
      duration: "6 Weeks",
      fee: "₹6500",
      seats: "15",
      badge: "NEW",
    },
    {
      name: "Spring Boot",
      icon: springLogo,
      batch: "August 2026",
      duration: "8 Weeks",
      fee: "₹8500",
      seats: "12",
      badge: "LIVE",
    },
    {
      name: "React.js",
      icon: reactLogo,
      batch: "July 2026",
      duration: "5 Weeks",
      fee: "₹6000",
      seats: "18",
      badge: "NEW",
    },
    {
      name: "MERN Stack",
      icon: mernLogo,
      batch: "August 2026",
      duration: "8 Weeks",
      fee: "₹9000",
      seats: "10",
      badge: "HOT",
    },
    {
      name: "DSA Java",
      icon: dsaLogo,
      batch: "July 2026",
      duration: "6 Weeks",
      fee: "₹5500",
      seats: "25",
      badge: "LIVE",
    },
    {
      name: "DevOps",
      icon: devopsLogo,
      batch: "August 2026",
      duration: "7 Weeks",
      fee: "₹9500",
      seats: "14",
      badge: "NEW",
    },
    {
      name: "Generative AI",
      icon: genaiLogo,
      batch: "September 2026",
      duration: "8 Weeks",
      fee: "₹12000",
      seats: "8",
      badge: "TRENDING",
    },
  ];

  return (
    <section className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
            Modular Certification Courses
          </h2>

          <p className="text-gray-600 text-xl max-w-4xl mx-auto">
            Short term industry focused certification programs designed to accelerate your technical growth with job ready practical skills.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {courses.map((course) => (
            <div
              key={course.name}
              className="
                bg-white
                rounded-3xl
                p-7
                shadow-xl
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                relative
                min-h-[450px]
                flex
                flex-col
              "
            >

              {/* Badge */}
              <div className="absolute top-5 right-5 bg-cyan-500 text-white text-xs px-4 py-1 rounded-full font-semibold">
                {course.badge}
              </div>

              {/* Bigger Image */}
              <div
                className="
                  w-28
                  h-28
                  bg-slate-50
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  mb-6
                  shadow-sm
                "
              >
                <img
                  src={course.icon}
                  alt={course.name}
                  className="
                    w-20
                    h-20
                    object-contain
                    scale-110
                  "
                />
              </div>

              <h3 className="text-2xl font-bold mb-6">
                {course.name}
              </h3>

              <div className="space-y-4 text-gray-600">

                <p>
                  📅 Batch: {course.batch}
                </p>

                <p>
                  ⏳ Duration: {course.duration}
                </p>

              </div>

              <div className="bg-cyan-50 rounded-2xl p-5 mt-6">

                <p className="text-3xl font-bold text-cyan-700">
                  {course.fee}
                </p>

                <p className="text-red-500 mt-2">
                  Only {course.seats} seats left
                </p>

              </div>

              <button
                onClick={() => navigate("/modular-enrollment")}
                className="
                  mt-auto
                  pt-6
                  w-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  text-white
                  py-4
                  rounded-2xl
                  font-semibold
                  hover:scale-105
                  transition-all
                "
              >
                Enroll Now →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ModularCourses;