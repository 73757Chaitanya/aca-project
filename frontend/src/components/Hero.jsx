import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        bg-gradient-to-br
        from-[#020617]
        via-[#0f172a]
        to-[#0c4a6e]
        py-24
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                bg-cyan-500/10
                border
                border-cyan-400/30
                backdrop-blur-lg
                px-5
                py-2
                rounded-full
                text-cyan-300
                font-medium
                mb-8
              "
            >
              🚀 India’s Next Generation Tech Academy
            </div>

            {/* Main Heading */}
            <h1
              className="
                text-5xl
                md:text-7xl
                font-black
                text-white
                leading-tight
              "
            >
              Build Your
              <br />

              <span className="text-cyan-400">
                Tech Career
              </span>

              <br />

              With ACA
            </h1>

            {/* Description */}
            <p
              className="
                text-xl
                text-slate-300
                mt-8
                leading-9
                max-w-2xl
              "
            >
              Industry focused advanced computing programs,
              certification courses and placement driven
              career training designed for future engineers.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button
                onClick={() => navigate("/programs")}
                className="
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  text-white
                  px-9
                  py-4
                  rounded-2xl
                  font-semibold
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-xl
                "
              >
                Explore Programs →
              </button>

              <button
                onClick={() => navigate("/admissions")}
                className="
                  border
                  border-slate-500
                  text-white
                  px-9
                  py-4
                  rounded-2xl
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                Apply Now
              </button>

            </div>

            {/* Trust Strip */}
            <div
              className="
                grid
                md:grid-cols-3
                gap-5
                mt-14
              "
            >

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">
                  1000+
                </h3>

                <p className="text-slate-400 mt-1">
                  Successful Placements
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">
                  50+
                </h3>

                <p className="text-slate-400 mt-1">
                  Industry Experts
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-cyan-400">
                  200+
                </h3>

                <p className="text-slate-400 mt-1">
                  Hiring Partners
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-6">

            {/* Card 1 */}
            <div
              className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                p-8
                rounded-3xl
                shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-5xl mb-5">
                🤖
              </div>

              <h3 className="text-2xl font-bold text-white">
                AI / ML
              </h3>

              <p className="text-slate-300 mt-3">
                Future technologies & intelligent systems.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                p-8
                rounded-3xl
                shadow-2xl
                mt-10
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-5xl mb-5">
                🌐
              </div>

              <h3 className="text-2xl font-bold text-white">
                Full Stack
              </h3>

              <p className="text-slate-300 mt-3">
                Build scalable modern web applications.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                p-8
                rounded-3xl
                shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-5xl mb-5">
                ☁️
              </div>

              <h3 className="text-2xl font-bold text-white">
                Cloud DevOps
              </h3>

              <p className="text-slate-300 mt-3">
                AWS deployment & automation systems.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                p-8
                rounded-3xl
                shadow-2xl
                mt-10
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-5xl mb-5">
                🔐
              </div>

              <h3 className="text-2xl font-bold text-white">
                Cyber Security
              </h3>

              <p className="text-slate-300 mt-3">
                Secure infrastructure and threat defense.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;