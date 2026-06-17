import { useState } from "react";

function PlacementRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    preferred_role: "",
    skills: "",
  });

  const [status, setStatus] = useState("");

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
        "http://localhost:5000/api/placement",
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
        setStatus("Application submitted successfully ✅");

        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          preferred_role: "",
          skills: "",
        });
      } else {
        setStatus(data.message);
      }

    } catch (error) {
      console.log(error);
      setStatus("Submission failed ❌");
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 py-20">

      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
            Placement Registration
          </h1>

          <p className="text-gray-600">
            Register for placement opportunities and start your tech career.
          </p>

        </div>

        {/* Form */}
        <div className="bg-white p-10 rounded-2xl shadow-lg">

          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 gap-5"
          >

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border rounded-xl px-4 py-3"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border rounded-xl px-4 py-3"
              required
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border rounded-xl px-4 py-3"
              required
            />

            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Course Completed"
              className="border rounded-xl px-4 py-3"
              required
            />

            <input
              type="text"
              name="preferred_role"
              value={formData.preferred_role}
              onChange={handleChange}
              placeholder="Preferred Role"
              className="border rounded-xl px-4 py-3"
              required
            />

            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Skills (Java, React, SQL...)"
              className="border rounded-xl px-4 py-3"
              required
            />

            <button
              type="submit"
              className="
                md:col-span-2
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                py-3
                rounded-xl
                font-semibold
                hover:scale-105
                transition-all
              "
            >
              Apply For Placement
            </button>

          </form>

          {status && (
            <p className="text-center text-green-600 mt-4 font-medium">
              {status}
            </p>
          )}

        </div>

      </div>

    </section>
  );
}

export default PlacementRegistration;