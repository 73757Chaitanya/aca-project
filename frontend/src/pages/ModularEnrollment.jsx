import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ModularEnrollment() {
  const navigate = useNavigate();

  const courseFees = {
    "Core Java": 7000,
    "Python": 6500,
    "Spring Boot": 8500,
    "React.js": 6000,
    "MERN Stack": 10000,
    "DSA Java": 7500,
    "DevOps": 9000,
    "Generative AI": 12000,
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    profession: "",
  });

  const [status, setStatus] = useState("");

  /* Handle Input */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* Submit Form */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/modular",
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
        /* Store payment data */
        const paymentData = {
          name: formData.name,
          email: formData.email,
          course: formData.course,
          amount: courseFees[formData.course],
          category: "modular",
        };

        localStorage.setItem(
          "paymentData",
          JSON.stringify(paymentData)
        );

        /* Redirect */
        navigate("/payment");

      } else {
        setStatus(data.message);
      }

    } catch (error) {
      console.log(error);
      setStatus("Enrollment failed ❌");
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 py-20">

      <div className="max-w-4xl mx-auto px-6">

        <div className="bg-white p-10 rounded-2xl shadow-xl">

          {/* Heading */}
          <h1 className="text-4xl font-bold text-center mb-8">
            Modular Course Enrollment
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Name */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-500
              "
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-500
              "
              required
            />

            {/* Phone */}
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-500
              "
              required
            />

            {/* Course */}
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
              "
              required
            >
              <option value="">Select Course</option>
              <option>Core Java</option>
              <option>Python</option>
              <option>Spring Boot</option>
              <option>React.js</option>
              <option>MERN Stack</option>
              <option>DSA Java</option>
              <option>DevOps</option>
              <option>Generative AI</option>
            </select>

            {/* Profession */}
            <select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              className="
                w-full
                border
                rounded-xl
                px-4
                py-3
              "
              required
            >
              <option value="">Select Profession</option>
              <option>Student</option>
              <option>Working Professional</option>
              <option>Graduate</option>
              <option>Career Switcher</option>
            </select>

            {/* Button */}
            <button
              type="submit"
              className="
                w-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                py-3
                rounded-xl
                font-semibold
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Enroll Now
            </button>

            {/* Status */}
            {status && (
              <p className="text-center text-red-600">
                {status}
              </p>
            )}

          </form>

        </div>

      </div>

    </section>
  );
}

export default ModularEnrollment;