import { useNavigate } from "react-router-dom";
import PageBadge from "../components/PageBadge";

function Placements() {
  const navigate = useNavigate();

  const stats = [
    { icon: "🎓", number: "1000+", label: "Students Placed" },
    { icon: "🏢", number: "200+", label: "Hiring Partners" },
    { icon: "💰", number: "₹24 LPA", label: "Highest Package" },
    { icon: "📈", number: "₹8 LPA", label: "Average Package" },
  ];

  const recruiters = [
    { name: "Google", offers: "120+ Offers" },
    { name: "Microsoft", offers: "95+ Offers" },
    { name: "Amazon", offers: "80+ Offers" },
    { name: "Oracle", offers: "70+ Offers" },
    { name: "Infosys", offers: "200+ Offers" },
    { name: "TCS", offers: "250+ Offers" },
    { name: "NVIDIA", offers: "40+ Offers" },
    { name: "Cisco", offers: "55+ Offers" },
  ];

  const successStories = [
    {
      name: "Rahul Sharma",
      company: "Microsoft",
      package: "₹18 LPA",
    },
    {
      name: "Priya Patil",
      company: "NVIDIA",
      package: "₹22 LPA",
    },
    {
      name: "Aman Verma",
      company: "Oracle",
      package: "₹14 LPA",
    },
  ];

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
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <PageBadge text="Career Opportunities" />

          <h1
            className="
              text-5xl
              md:text-6xl
              font-black
              mt-5
              mb-5
              bg-gradient-to-r
              from-slate-800
              to-cyan-600
              bg-clip-text
              text-transparent
            "
          >
            Launch Your Career
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We connect students with top technology companies
            through industry aligned placement support,
            interview preparation and hiring partnerships.
          </p>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">

          {stats.map((item) => (
            <div
              key={item.number}
              className="
                bg-white
                rounded-3xl
                p-8
                text-center
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-300
              "
            >
              <div className="text-5xl mb-4">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold text-cyan-600 mb-3">
                {item.number}
              </h2>

              <p className="text-gray-600 font-medium">
                {item.label}
              </p>
            </div>
          ))}

        </div>

        {/* Recruiters */}
        <div className="mb-20">

          <h2 className="text-4xl font-bold text-center mb-12">
            Top Hiring Partners
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {recruiters.map((company) => (
              <div
                key={company.name}
                className="
                  bg-white
                  rounded-2xl
                  p-6
                  text-center
                  shadow-md
                  border
                  border-slate-100
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <div className="text-3xl mb-4">
                  🏢
                </div>

                <h3 className="text-xl font-bold text-slate-800">
                  {company.name}
                </h3>

                <p className="mt-3 text-cyan-600 font-medium">
                  {company.offers}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* Success Stories */}
        <div className="mb-20">

          <h2 className="text-4xl font-bold text-center mb-12">
            Student Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {successStories.map((student) => (
              <div
                key={student.name}
                className="
                  bg-white
                  rounded-3xl
                  p-8
                  text-center
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-3
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-20
                    h-20
                    mx-auto
                    rounded-full
                    bg-cyan-100
                    flex
                    items-center
                    justify-center
                    text-4xl
                    mb-5
                  "
                >
                  👨‍🎓
                </div>

                <h3 className="text-2xl font-bold">
                  {student.name}
                </h3>

                <p className="mt-4 text-cyan-600 font-semibold">
                  Placed at {student.company}
                </p>

                <p className="mt-2 text-gray-500">
                  Package: {student.package}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* CTA */}
        <div
          className="
            bg-gradient-to-r
            from-[#0891b2]
            via-[#2563eb]
            to-[#1e3a8a]
            rounded-3xl
            p-14
            text-center
            text-white
            shadow-2xl
          "
        >

          <h2 className="text-5xl font-black mb-5">
            Start Your Tech Career With ACA
          </h2>

          <p className="text-lg mb-10 text-slate-100">
            95% Placement Success • Mock Interviews • Resume Building • Industry Mentors
          </p>

          <button
            onClick={() =>
              navigate("/placement-registration")
            }
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
            Apply For Placement →
          </button>

        </div>

      </div>
    </section>
  );
}

export default Placements;