import { useState } from "react";
import { motion } from "framer-motion";

function PlacementRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    passout_year: "",
    university: "",
    branch: "",
    course: "",
    preferred_role: "",
    skills: "",
    experience: "",
    resume: null,
    profile_pic: null,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch(
        "http://localhost:5000/api/placement",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus("Application submitted successfully ✅");
      } else {
        setStatus(result.message);
      }
    } catch (error) {
      console.log(error);
      setStatus("Submission failed ❌");
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-6"
      >
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
            Placement Registration
          </h1>

          <p className="text-gray-600 text-lg">
            Apply for placement opportunities and upload your profile.
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl">

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
              className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-400"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-400"
              required
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border rounded-xl px-4 py-3 focus:ring-2 focus:ring-cyan-400"
              required
            />

            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
              required
            >
              <option value="">Select Qualification</option>
              <option>B.E</option>
              <option>B.Tech</option>
              <option>MCA</option>
              <option>BCA</option>
              <option>M.Tech</option>
              <option>Other</option>
            </select>

            <select
              name="passout_year"
              value={formData.passout_year}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
              required
            >
              <option value="">Passout Year</option>
              <option>2026</option>
              <option>2025</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>

            <select
              name="university"
              value={formData.university}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
              required
            >
              <option value="">Select University</option>
              <option>Savitribai Phule Pune University</option>
              <option>Mumbai University</option>
              <option>VTU</option>
              <option>Anna University</option>
              <option>JNTU Hyderabad</option>
              <option>Other</option>
            </select>

            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
              required
            >
              <option value="">Select Branch</option>
              <option>Computer Science</option>
              <option>Information Technology</option>
              <option>Electronics</option>
              <option>Mechanical</option>
              <option>Civil</option>
              <option>Electrical</option>
            </select>

            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              placeholder="Course Completed"
              className="border rounded-xl px-4 py-3"
              required
            />

            <select
              name="preferred_role"
              value={formData.preferred_role}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
              required
            >
              <option value="">Preferred Role</option>
              <option>Java Developer</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
              <option>DevOps Engineer</option>
              <option>QA Engineer</option>
            </select>

            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Skills (Java, React, SQL...)"
              className="border rounded-xl px-4 py-3"
              required
            />

            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="border rounded-xl px-4 py-3"
              required
            >
              <option value="">Experience</option>
              <option>Fresher</option>
              <option>0-1 Years</option>
              <option>1-2 Years</option>
              <option>2+ Years</option>
            </select>

            <div className="border-2 border-dashed rounded-2xl p-4 hover:bg-slate-50 transition-all">
              <label className="block mb-2 font-medium">
                📄 Upload Resume
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                required
              />
            </div>

            <div className="border-2 border-dashed rounded-2xl p-4 hover:bg-slate-50 transition-all">
              <label className="block mb-2 font-medium">
                🖼 Upload Profile Picture
              </label>
              <input
                type="file"
                name="profile_pic"
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="
                md:col-span-2
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                py-4
                rounded-xl
                font-semibold
                shadow-lg
              "
            >
              Apply For Placement 🚀
            </motion.button>

          </form>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-600 mt-5 font-medium"
            >
              {status}
            </motion.p>
          )}
        </div>
      </motion.div>
    </section>
  );
}

export default PlacementRegistration;