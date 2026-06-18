import { Link } from "react-router-dom";
import { useState } from "react";
import navbarLogo from "../assets/logos/navbar-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between min-h-[90px]">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
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
              className="h-20 md:h-24 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-10
              font-medium
              text-slate-700
            "
          >
            <Link to="/" className="hover:text-cyan-600 transition-all">
              Home
            </Link>

            <Link
              to="/programs"
              className="hover:text-cyan-600 transition-all"
            >
              Programs
            </Link>

            <Link
              to="/admissions"
              className="hover:text-cyan-600 transition-all"
            >
              Admissions
            </Link>

            <Link
              to="/placements"
              className="hover:text-cyan-600 transition-all"
            >
              Placements
            </Link>

            <Link
              to="/contact"
              className="hover:text-cyan-600 transition-all"
            >
              Contact
            </Link>

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
                transition-all
              "
            >
              Login →
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div
            className="
              md:hidden
              flex
              flex-col
              gap-5
              py-6
              text-slate-700
              font-medium
              border-t
            "
          >
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/programs" onClick={closeMenu}>
              Programs
            </Link>

            <Link to="/admissions" onClick={closeMenu}>
              Admissions
            </Link>

            <Link to="/placements" onClick={closeMenu}>
              Placements
            </Link>

            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>

            <Link
              to="/login"
              onClick={closeMenu}
              className="
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                px-5
                py-3
                rounded-xl
                text-center
              "
            >
              Login →
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;