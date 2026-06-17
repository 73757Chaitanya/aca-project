import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100 px-6">
      <div className="text-center">

        <h1 className="text-8xl font-bold text-cyan-600">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-4 mb-8">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="
            bg-cyan-600
            text-white
            px-8
            py-3
            rounded-lg
            font-semibold
            hover:bg-cyan-700
            transition-all
          "
        >
          Back To Home
        </Link>

      </div>
    </section>
  );
}

export default NotFound;