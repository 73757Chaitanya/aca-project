import { useParams, useNavigate } from "react-router-dom";
import programs from "../data/programs";
import PageBadge from "../components/PageBadge";

function ProgramDetails() {
  const { programId } = useParams();
  const navigate = useNavigate();

  const program = programs[programId];

  if (!program) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">
          Program Not Found
        </h1>
      </div>
    );
  }

  return (
    <section
      className="
        min-h-screen
        py-24
        bg-gradient-to-br
        from-slate-50
        via-cyan-50
        to-blue-50
      "
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* HERO IMAGE */}
        <div
          className="
            relative
            mb-12
            rounded-3xl
            overflow-hidden
            shadow-2xl
            bg-white
          "
        >

          <img
            src={program.image}
            alt={program.code}
            className="
              w-full
              h-[500px]
              object-contain
              bg-slate-50
            "
          />

          {/* Duration Badge */}
          <div
            className="
              absolute
              top-6
              right-6
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
              px-6
              py-3
              rounded-2xl
              font-semibold
              shadow-xl
            "
          >
            ⏳ {program.duration}
          </div>

        </div>

        {/* MAIN CARD */}
        <div
          className="
            bg-white
            rounded-3xl
            shadow-2xl
            p-12
          "
        >

          {/* Header */}
          <h1
            className="
              text-5xl
              font-black
              mb-4
              bg-gradient-to-r
              from-slate-800
              to-cyan-600
              bg-clip-text
              text-transparent
            "
          >
            {program.code}
          </h1>

          <PageBadge text="Industry Certified Program" />

          <h2 className="text-3xl font-semibold mt-6 mb-6">
            {program.title}
          </h2>

          {/* Overview */}
          <div
            className="
              bg-slate-50
              rounded-2xl
              p-8
              mb-10
            "
          >
            <p className="text-gray-700 leading-9 text-lg">
              {program.overview}
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            <div
              className="
                bg-gradient-to-r
                from-cyan-50
                to-blue-50
                p-8
                rounded-3xl
                hover:shadow-xl
                transition-all
              "
            >

              <div className="text-4xl mb-4">
                ⏳
              </div>

              <h3 className="text-2xl font-bold text-cyan-700 mb-3">
                Duration
              </h3>

              <p className="text-lg">
                {program.duration}
              </p>

            </div>

            <div
              className="
                bg-gradient-to-r
                from-cyan-50
                to-blue-50
                p-8
                rounded-3xl
                hover:shadow-xl
                transition-all
              "
            >

              <div className="text-4xl mb-4">
                🎓
              </div>

              <h3 className="text-2xl font-bold text-cyan-700 mb-3">
                Eligibility
              </h3>

              <p className="text-lg">
                {program.eligibility}
              </p>

            </div>

          </div>

          {/* Modules */}
          <h3 className="text-3xl font-bold mb-8">
            Course Modules
          </h3>

          <div className="grid md:grid-cols-2 gap-5 mb-12">

            {program.modules.map((module) => (
              <div
                key={module}
                className="
                  bg-slate-50
                  p-5
                  rounded-2xl
                  hover:bg-cyan-50
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  cursor-pointer
                  font-medium
                "
              >
                ✓ {module}
              </div>
            ))}

          </div>

          {/* CTA SECTION */}
          <div
            className="
              bg-gradient-to-r
              from-[#0891b2]
              via-[#2563eb]
              to-[#1e3a8a]
              rounded-3xl
              p-10
              text-center
              text-white
            "
          >

            <h2 className="text-4xl font-bold mb-4">
              Ready To Join This Program?
            </h2>

            <p className="text-slate-100 mb-8 text-lg">
              Secure your seat now and accelerate your career in technology.
            </p>

            <button
              onClick={() => navigate("/admissions")}
              className="
                bg-white
                text-blue-700
                px-10
                py-4
                rounded-2xl
                font-bold
                hover:scale-105
                transition-all
                duration-300
                shadow-xl
              "
            >
              Apply Now →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProgramDetails;