import { Link } from "react-router-dom";
import programs from "../data/programs";

function Courses() {
  const programsList = Object.values(programs);

  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h1
          className="
            text-5xl
            font-bold
            text-center
            mb-4
            bg-gradient-to-r
            from-cyan-500
            to-blue-700
            bg-clip-text
            text-transparent
          "
        >
          Academic Programs
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Explore our industry-oriented postgraduate programs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {programsList.map((program) => (
            <div
              key={program.code}
              className="
                group
                bg-white
                rounded-xl
                overflow-hidden
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-300
              "
            >
              <div className="relative overflow-hidden">

                <img
  src={program.image}
  alt={program.code}
  className="
    w-full
    h-56
    object-contain
    bg-slate-100
    transition-transform
    duration-500
    group-hover:scale-105
  "
/>

                <div
                  className="
                    absolute
                    top-4
                    right-4
                    bg-cyan-600
                    text-white
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-semibold
                    shadow-lg
                  "
                >
                  24 Weeks
                </div>

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    group-hover:bg-black/10
                    transition-all
                    duration-300
                  "
                />
              </div>

              <div className="p-6 flex flex-col">

                <h2 className="text-2xl font-bold text-cyan-600">
                  {program.code}
                </h2>

                <p className="mt-3 text-gray-700 min-h-[60px]">
                  {program.title}
                </p>

                <Link
                  to={`/programs/${program.slug}`}
                  className="
                    mt-5
                    inline-block
                    text-cyan-600
                    font-semibold
                    hover:text-cyan-800
                  "
                >
                  Know More →
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Courses;