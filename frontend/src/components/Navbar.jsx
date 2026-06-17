import { Link } from "react-router-dom";
import navbarLogo from "../assets/logos/navbar-logo.png";

function Navbar() {
  return (
    <nav
      className="
        sticky
        top-0
        z-50
        backdrop-blur-xl
        bg-white/80
        border-b
        border-slate-200
        shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex items-center justify-between min-h-[90px]">

          {/* LOGO */}
          <Link
            to="/"
            className="
              flex
              items-center
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <img
              src={navbarLogo}
              alt="ACA Logo"
              className="h-24 w-auto object-contain"
            />
          </Link>

          {/* NAV LINKS */}
          <div
            className="
              flex
              items-center
              gap-10
              font-medium
              text-slate-700
            "
          >

            {/* HOME */}
            <Link
              to="/"
              className="
                relative
                hover:text-cyan-600
                transition-all
                duration-300
                after:absolute
                after:left-0
                after:-bottom-2
                after:w-0
                after:h-[2px]
                after:bg-cyan-500
                after:transition-all
                hover:after:w-full
              "
            >
              Home
            </Link>

            {/* PROGRAMS */}
            <Link
              to="/programs"
              className="
                relative
                hover:text-cyan-600
                transition-all
                duration-300
                after:absolute
                after:left-0
                after:-bottom-2
                after:w-0
                after:h-[2px]
                after:bg-cyan-500
                after:transition-all
                hover:after:w-full
              "
            >
              Programs
            </Link>

            {/* ADMISSIONS */}
            <Link
              to="/admissions"
              className="
                relative
                hover:text-cyan-600
                transition-all
                duration-300
                after:absolute
                after:left-0
                after:-bottom-2
                after:w-0
                after:h-[2px]
                after:bg-cyan-500
                after:transition-all
                hover:after:w-full
              "
            >
              Admissions
            </Link>

            {/* PLACEMENTS */}
            <Link
              to="/placements"
              className="
                relative
                hover:text-cyan-600
                transition-all
                duration-300
                after:absolute
                after:left-0
                after:-bottom-2
                after:w-0
                after:h-[2px]
                after:bg-cyan-500
                after:transition-all
                hover:after:w-full
              "
            >
              Placements
            </Link>

            {/* CONTACT */}
            <Link
              to="/contact"
              className="
                relative
                hover:text-cyan-600
                transition-all
                duration-300
                after:absolute
                after:left-0
                after:-bottom-2
                after:w-0
                after:h-[2px]
                after:bg-cyan-500
                after:transition-all
                hover:after:w-full
              "
            >
              Contact
            </Link>

            {/* LOGIN */}
            <Link
              to="/login"
              className="
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                px-7
                py-3
                rounded-2xl
                font-semibold
                shadow-lg
                hover:scale-105
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              Login →
            </Link>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;