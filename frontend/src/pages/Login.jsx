import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        setStatus("Login successful ✅");

        setFormData({
          email: "",
          password: "",
        });

        setTimeout(() => {
          if (data.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/");
          }
        }, 1000);

      } else {
        setStatus(data.message);
      }

    } catch (error) {
      console.log(error);
      setStatus("Server error ❌");
    }
  };

  return (
    <section
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#020617]
        via-[#0f172a]
        to-[#0c4a6e]
        flex
        items-center
        justify-center
        px-6
        py-20
      "
    >

      <div
        className="
          max-w-6xl
          w-full
          grid
          lg:grid-cols-2
          rounded-3xl
          overflow-hidden
          shadow-2xl
          bg-white
        "
      >

        {/* LEFT PANEL */}
        <div
          className="
            bg-gradient-to-br
            from-[#0891b2]
            via-[#2563eb]
            to-[#1e3a8a]
            text-white
            p-12
            flex
            flex-col
            justify-center
          "
        >

          <div
            className="
              inline-block
              bg-white/10
              px-4
              py-2
              rounded-full
              mb-6
              w-fit
            "
          >
            Secure Access Portal
          </div>

          <h1 className="text-5xl font-black leading-tight">
            Welcome
            <br />
            Back To ACA
          </h1>

          <p className="mt-8 text-lg text-slate-100 leading-8">
            Access your learning dashboard, student portal,
            trainer panel and administrative services
            through our secure authentication system.
          </p>

          <div className="mt-10 space-y-4">

            <p>✓ Student Portal Access</p>
            <p>✓ Trainer Dashboard</p>
            <p>✓ Admin Authentication</p>
            <p>✓ Secure JWT Session</p>

          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="p-12">

          {/* Logo */}
          <div className="text-center mb-10">

            <h1 className="text-5xl font-black text-cyan-600">
              ACA
            </h1>

            <p className="text-gray-500 mt-3">
              Advanced Computing Academy
            </p>

          </div>

          <h2 className="text-3xl font-bold text-center mb-8">
            Login Portal
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Email */}
            <div>

              <label className="block mb-3 font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="
                  w-full
                  bg-slate-50
                  border
                  border-slate-200
                  rounded-2xl
                  px-5
                  py-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                "
              />

            </div>

            {/* Password */}
            <div>

              <label className="block mb-3 font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="
                  w-full
                  bg-slate-50
                  border
                  border-slate-200
                  rounded-2xl
                  px-5
                  py-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                "
              />

            </div>

            {/* Remember */}
            <div className="flex justify-between text-sm">

              <label>
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>

              <a
                href="#"
                className="text-cyan-600 hover:underline"
              >
                Forgot Password?
              </a>

            </div>

            {/* Button */}
            <button
              type="submit"
              className="
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
              Secure Login →
            </button>

            {/* Status */}
            {status && (
              <div
                className="
                  bg-green-50
                  text-green-600
                  p-4
                  rounded-xl
                  text-center
                  font-medium
                "
              >
                {status}
              </div>
            )}

          </form>

          <p className="text-center text-gray-400 mt-8">
            Student | Trainer | Admin Access
          </p>

        </div>

      </div>

    </section>
  );
}

export default Login;