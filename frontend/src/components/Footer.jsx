import { Link } from "react-router-dom";
import footerLogo from "../assets/logos/footer-logo.png";

function Footer() {
  return (
    <footer
      className="
        mt-24
        bg-gradient-to-br
        from-[#020617]
        via-[#0f172a]
        to-[#082f49]
        text-white
      "
    >

      {/* TOP CTA */}
      <div className="max-w-7xl mx-auto px-8 pt-14">

        <div
          className="
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-10
            mb-14
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >

          <div>
            <h2 className="text-3xl font-bold">
              Ready To Build Your Tech Career?
            </h2>

            <p className="text-slate-300 mt-3">
              Join industry focused programs and start your journey today.
            </p>
          </div>

          {/* FIXED CTA BUTTON */}
          <Link
            to="/admissions"
            className="
              inline-block
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-8
              py-4
              rounded-2xl
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              shadow-xl
            "
          >
            Apply Now →
          </Link>

        </div>

      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-8 pb-12">

        <div className="grid md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>

            <img
              src={footerLogo}
              alt="ACA Official Logo"
              className="h-28 w-auto object-contain mb-5"
            />

            <p className="text-cyan-400 font-semibold text-lg mb-4">
              ज्ञानं शक्तिः, कर्म सिद्धिः
            </p>

            <p className="text-slate-400 leading-8">
              Advanced Computing Academy empowering future
              IT professionals through premium industry
              focused education and career transformation.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-bold mb-6 text-cyan-400">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-300">

              <li>
                <Link
                  to="/"
                  className="hover:text-cyan-400 transition-all"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/programs"
                  className="hover:text-cyan-400 transition-all"
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  to="/admissions"
                  className="hover:text-cyan-400 transition-all"
                >
                  Admissions
                </Link>
              </li>

              <li>
                <Link
                  to="/placements"
                  className="hover:text-cyan-400 transition-all"
                >
                  Placements
                </Link>
              </li>

            </ul>

          </div>

          {/* PROGRAMS */}
          <div>

            <h3 className="text-xl font-bold mb-6 text-cyan-400">
              Popular Programs
            </h3>

            <ul className="space-y-4 text-slate-300">

              <li>PG-DAC</li>
              <li>PG-DBDA</li>
              <li>Artificial Intelligence</li>
              <li>Cloud Computing</li>
              <li>Cyber Security</li>

            </ul>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-bold mb-6 text-cyan-400">
              Contact Us
            </h3>

            <div className="space-y-4 text-slate-300">

              <p>📍 Bengaluru, Karnataka, India</p>
              <p>✉ admissions@aca.edu</p>
              <p>☎ +91 98765 43210</p>

            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-8">

              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-cyan-500 transition-all">
                💼
              </div>

              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-cyan-500 transition-all">
                💻
              </div>

              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-cyan-500 transition-all">
                📷
              </div>

              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center cursor-pointer hover:bg-cyan-500 transition-all">
                ▶️
              </div>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <hr className="border-slate-700 my-12" />

        <div
          className="
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            text-slate-400
            text-sm
            gap-4
          "
        >
          <p>
            © 2026 Advanced Computing Academy (ACA). All Rights Reserved.
          </p>

          <p>
            Designed For Future Tech Professionals 🚀
          </p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;