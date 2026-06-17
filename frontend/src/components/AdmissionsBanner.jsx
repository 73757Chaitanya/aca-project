import { useNavigate } from "react-router-dom";

function AdmissionsBanner() {
  const navigate = useNavigate();

  return (
    <section
      className="
        py-24
        bg-gradient-to-br
        from-[#0891b2]
        via-[#2563eb]
        to-[#1e3a8a]
        relative
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            rounded-3xl
            p-12
            text-center
            text-white
            shadow-2xl
          "
        >

          {/* Badge */}
          <div
            className="
              inline-block
              bg-white/20
              px-5
              py-2
              rounded-full
              font-medium
              mb-6
            "
          >
            🎓 Admissions Closing Soon
          </div>

          {/* Heading */}
          <h2
            className="
              text-5xl
              md:text-6xl
              font-black
              mb-6
              leading-tight
            "
          >
            Admissions Open
            <br />

            For 2026 Batch
          </h2>

          {/* Description */}
          <p
            className="
              text-xl
              text-slate-100
              max-w-3xl
              mx-auto
              leading-8
              mb-10
            "
          >
            Applications are now open for our flagship
            postgraduate technology programs designed
            to prepare engineers for high growth careers
            in the IT industry.
          </p>

          {/* Stats */}
          <div
            className="
              grid
              md:grid-cols-3
              gap-6
              mb-10
              max-w-4xl
              mx-auto
            "
          >

            <div
              className="
                bg-white/10
                rounded-2xl
                p-5
              "
            >
              <h3 className="text-3xl font-bold">
                6+
              </h3>

              <p className="mt-2 text-slate-200">
                Premium PG Programs
              </p>
            </div>

            <div
              className="
                bg-white/10
                rounded-2xl
                p-5
              "
            >
              <h3 className="text-3xl font-bold">
                1000+
              </h3>

              <p className="mt-2 text-slate-200">
                Students Placed
              </p>
            </div>

            <div
              className="
                bg-white/10
                rounded-2xl
                p-5
              "
            >
              <h3 className="text-3xl font-bold">
                95%
              </h3>

              <p className="mt-2 text-slate-200">
                Placement Success
              </p>
            </div>

          </div>

          {/* CTA */}
          <button
            onClick={() => navigate("/admissions")}
            className="
              bg-white
              text-blue-700
              px-10
              py-4
              rounded-2xl
              font-bold
              text-lg
              hover:scale-105
              transition-all
              duration-300
              shadow-xl
            "
          >
            Apply For Admission →
          </button>

          {/* Footer note */}
          <p className="mt-6 text-slate-200">
            Limited seats available • Industry certified curriculum
          </p>

        </div>

      </div>
    </section>
  );
}

export default AdmissionsBanner;