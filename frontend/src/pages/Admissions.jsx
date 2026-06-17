import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageBadge from "../components/PageBadge";

function Admissions() {
  const navigate = useNavigate();

  const courseFees = {
    "PG-DAC": 80000,
    "PG-DBDA": 85000,
    "PG-AI": 90000,
    "PG-FSD": 75000,
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    qualification: "",
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
        "http://localhost:5000/api/admission",
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
        const paymentData = {
  name: formData.name,
  email: formData.email,
  course: formData.course,
  amount: courseFees[formData.course],
  category: "program",
};

        localStorage.setItem(
          "paymentData",
          JSON.stringify(paymentData)
        );

        navigate("/payment");
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
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
            Admissions 2026
          </h1>

          <PageBadge text="Admissions Open 2026" />

          <p className="text-gray-600 mt-4">
            Begin your journey towards a successful IT career.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Eligibility
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Engineering Graduates</li>
            <li>Science Graduates</li>
            <li>Final Year Students</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md mb-10">
          <h2 className="text-3xl font-bold mb-8">
            Admission Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Register Online",
              "Entrance Test",
              "Counselling",
              "Admission Confirmation",
            ].map((step, index) => (
              <div
                key={step}
                className="text-center p-6 rounded-xl bg-slate-50 hover:bg-cyan-50 transition-all"
              >
                <div className="text-4xl font-bold text-cyan-600">
                  {index + 1}
                </div>

                <p className="mt-3">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md mb-10">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Apply For Admission
          </h2>

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

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
              required
            >
              <option value="">Select Course</option>
              <option>PG-DAC</option>
              <option>PG-DBDA</option>
              <option>PG-AI</option>
              <option>PG-FSD</option>
            </select>

            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="Qualification"
              className="border rounded-xl px-4 py-3 md:col-span-2"
              required
            />

            <button
              type="submit"
              className="md:col-span-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-xl font-semibold"
            >
              Submit Application
            </button>
          </form>

          {status && (
            <p className="text-center text-red-600 mt-4">
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Admissions;