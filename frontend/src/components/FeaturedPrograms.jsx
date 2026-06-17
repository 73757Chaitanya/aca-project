import { useNavigate } from "react-router-dom";

function FeaturedPrograms() {
  const navigate = useNavigate();

  const programs = [
    {
      id: "pg-dac",
      code: "PG-DAC",
      title: "Advanced Computing",
      icon: "💻",
      duration: "6 Months",
      eligibility: "Graduate",
      tag: "Most Popular",
    },
    {
      id: "pg-dbda",
      code: "PG-DBDA",
      title: "Big Data Analytics",
      icon: "📊",
      duration: "6 Months",
      eligibility: "Graduate",
      tag: "Trending",
    },
    {
      id: "pg-ai",
      code: "PG-AI",
      title: "Artificial Intelligence",
      icon: "🤖",
      duration: "6 Months",
      eligibility: "Graduate",
      tag: "Hot",
    },
    {
      id: "pg-fsd",
      code: "PG-FSD",
      title: "Full Stack Development",
      icon: "🌐",
      duration: "6 Months",
      eligibility: "Graduate",
      tag: "Industry Ready",
    },
    {
      id: "pg-cc",
      code: "PG-CC",
      title: "Cloud Computing",
      icon: "☁️",
      duration: "6 Months",
      eligibility: "Graduate",
      tag: "AWS Focused",
    },
    {
      id: "pg-cyber",
      code: "PG-CYBER",
      title: "Cyber Security",
      icon: "🔐",
      duration: "6 Months",
      eligibility: "Graduate",
      tag: "Future Proof",
    },
  ];

  return (
    <section
      className="
        py-24
        bg-gradient-to-br
        from-slate-50
        via-cyan-50
        to-blue-50
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <div
            className="
              inline-block
              bg-cyan-100
              text-cyan-700
              px-5
              py-2
              rounded-full
              font-medium
              mb-5
            "
          >
            Premium Career Programs
          </div>

          <h2
            className="
              text-5xl
              font-bold
              mb-5
              bg-gradient-to-r
              from-slate-800
              to-cyan-600
              bg-clip-text
              text-transparent
            "
          >
            Academic Programs
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Industry aligned postgraduate diploma programs
            designed to transform graduates into highly skilled
            IT professionals.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {programs.map((program) => (
            <div
              key={program.code}
              className="
                bg-white
                p-8
                rounded-3xl
                shadow-lg
                border
                border-slate-100
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-300
                relative
                overflow-hidden
              "
            >

              {/* Badge */}
              <div
                className="
                  absolute
                  top-5
                  right-5
                  bg-cyan-500
                  text-white
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  font-medium
                "
              >
                {program.tag}
              </div>

              {/* Icon */}
              <div
                className="
                  w-20
                  h-20
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-100
                  to-blue-100
                  text-5xl
                  mb-6
                "
              >
                {program.icon}
              </div>

              {/* Code */}
              <h3 className="text-2xl font-bold text-slate-800">
                {program.code}
              </h3>

              {/* Title */}
              <p className="mt-3 text-gray-600 text-lg">
                {program.title}
              </p>

              {/* Pills */}
              <div className="flex gap-3 mt-6 flex-wrap">

                <div
                  className="
                    bg-slate-100
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    text-gray-700
                  "
                >
                  ⏳ {program.duration}
                </div>

                <div
                  className="
                    bg-cyan-50
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    text-cyan-700
                  "
                >
                  🎓 {program.eligibility}
                </div>

              </div>

              {/* Button */}
              <button
                onClick={() =>
                  navigate(`/programs/${program.id}`)
                }
                className="
                  mt-8
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
                  duration-300
                  shadow-lg
                "
              >
                View Program Details →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedPrograms;