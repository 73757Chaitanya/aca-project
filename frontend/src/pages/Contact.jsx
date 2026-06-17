import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
        "http://localhost:5000/api/contact",
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
        setStatus("Message sent successfully ✅");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(data.message);
      }
    } catch (error) {
      console.log(error);
      setStatus("Something went wrong ❌");
    }
  };

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

          <div
            className="
              inline-block
              bg-cyan-100
              text-cyan-700
              px-5
              py-2
              rounded-full
              font-medium
              mb-5
            "
          >
            We Are Here To Help
          </div>

          <h1
            className="
              text-5xl
              md:text-6xl
              font-black
              mb-5
              bg-gradient-to-r
              from-slate-800
              to-cyan-600
              bg-clip-text
              text-transparent
            "
          >
            Contact ACA
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions regarding admissions, placements
            or courses? Reach out and our team will connect
            with you shortly.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT PANEL */}
          <div
            className="
              bg-gradient-to-br
              from-[#0891b2]
              via-[#2563eb]
              to-[#1e3a8a]
              text-white
              p-10
              rounded-3xl
              shadow-2xl
            "
          >

            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div>
                <p className="text-cyan-200 mb-2">
                  📍 Address
                </p>

                <p className="text-lg">
                  Advanced Computing Academy,
                  Bengaluru, India
                </p>
              </div>

              <div>
                <p className="text-cyan-200 mb-2">
                  ✉ Email
                </p>

                <p className="text-lg">
                  admissions@aca.edu
                </p>
              </div>

              <div>
                <p className="text-cyan-200 mb-2">
                  ☎ Phone
                </p>

                <p className="text-lg">
                  +91 9876543210
                </p>
              </div>

              <div
                className="
                  mt-10
                  bg-white/10
                  p-6
                  rounded-2xl
                "
              >
                <h3 className="text-xl font-semibold mb-3">
                  Office Hours
                </h3>

                <p>Monday - Saturday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>

            </div>

          </div>

          {/* FORM */}
          <div
            className="
              bg-white
              p-10
              rounded-3xl
              shadow-xl
            "
          >

            <h2 className="text-3xl font-bold mb-8">
              Send Message
            </h2>

            <form
              className="space-y-5"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
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

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
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

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
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

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
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
              ></textarea>

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
                Send Message →
              </button>

              {/* Status */}
              {status && (
                <div
                  className="
                    mt-4
                    bg-green-50
                    text-green-600
                    p-4
                    rounded-xl
                    font-medium
                    text-center
                  "
                >
                  {status}
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;