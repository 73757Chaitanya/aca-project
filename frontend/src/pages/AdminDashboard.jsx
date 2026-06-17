import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    admissions: 0,
    modular: 0,
    payments: 0,
    revenue: 0,
  });

  const [admissions, setAdmissions] = useState([]);
  const [modular, setModular] = useState([]);
  const [payments, setPayments] = useState([]);

  const [search, setSearch] = useState("");
  const [admissionFilter, setAdmissionFilter] = useState("");
  const [modularFilter, setModularFilter] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  const handleDeleteAdmission = async (id) => {
    await fetch(
      `http://localhost:5000/api/admin/admission/${id}`,
      { method: "DELETE" }
    );
    fetchRecords();
    fetchStats();
  };

  const handleDeleteModular = async (id) => {
    await fetch(
      `http://localhost:5000/api/admin/modular/${id}`,
      { method: "DELETE" }
    );
    fetchRecords();
    fetchStats();
  };

  const handleDeletePayment = async (id) => {
    await fetch(
      `http://localhost:5000/api/admin/payment/${id}`,
      { method: "DELETE" }
    );
    fetchRecords();
    fetchStats();
  };

  const fetchStats = async () => {
    const admissionsRes = await fetch("http://localhost:5000/api/admin/admissions-count");
    const modularRes = await fetch("http://localhost:5000/api/admin/modular-count");
    const paymentsRes = await fetch("http://localhost:5000/api/admin/payments-count");
    const revenueRes = await fetch("http://localhost:5000/api/admin/revenue");

    const admissionsData = await admissionsRes.json();
    const modularData = await modularRes.json();
    const paymentsData = await paymentsRes.json();
    const revenueData = await revenueRes.json();

    setStats({
      admissions: admissionsData.total,
      modular: modularData.total,
      payments: paymentsData.total,
      revenue: revenueData.revenue || 0,
    });
  };

  const fetchRecords = async () => {
    const admissionRes = await fetch("http://localhost:5000/api/admin/admissions");
    const modularRes = await fetch("http://localhost:5000/api/admin/modular");
    const paymentRes = await fetch("http://localhost:5000/api/admin/payments");

    setAdmissions(await admissionRes.json());
    setModular(await modularRes.json());
    setPayments(await paymentRes.json());
  };

  useEffect(() => {
    fetchStats();
    fetchRecords();
  }, []);

  /* Filters */
  const filteredAdmissions = admissions.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (admissionFilter === "" ||
        item.course === admissionFilter)
  );

  const filteredModular = modular.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (modularFilter === "" ||
        item.course === modularFilter)
  );

  const filteredPayments = payments.filter(
    (item) =>
      item.student_name
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}
      <div className="w-72 bg-slate-950 text-white p-8 min-h-screen">

        <h1 className="text-3xl font-bold text-cyan-400 mb-10">
          ACA ADMIN
        </h1>

        <div className="space-y-5">

          <button className="w-full text-left bg-slate-800 p-4 rounded-xl">
            📊 Dashboard
          </button>

          <button className="w-full text-left bg-slate-800 p-4 rounded-xl">
            🎓 Admissions
          </button>

          <button className="w-full text-left bg-slate-800 p-4 rounded-xl">
            📚 Modular Courses
          </button>

          <button className="w-full text-left bg-slate-800 p-4 rounded-xl">
            💳 Payments
          </button>

          <button
            onClick={handleLogout}
            className="w-full text-left bg-red-500 p-4 rounded-xl mt-10"
          >
            🚪 Logout
          </button>

        </div>

      </div>

      {/* Main */}
      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by student name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-8 p-4 rounded-xl border"
        />

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">

          <div className="bg-cyan-500 text-white p-6 rounded-2xl">
            <h2>Admissions</h2>
            <p className="text-4xl font-bold">{stats.admissions}</p>
          </div>

          <div className="bg-purple-500 text-white p-6 rounded-2xl">
            <h2>Modular</h2>
            <p className="text-4xl font-bold">{stats.modular}</p>
          </div>

          <div className="bg-green-500 text-white p-6 rounded-2xl">
            <h2>Payments</h2>
            <p className="text-4xl font-bold">{stats.payments}</p>
          </div>

          <div className="bg-orange-500 text-white p-6 rounded-2xl">
            <h2>Revenue</h2>
            <p className="text-4xl font-bold">₹{stats.revenue}</p>
          </div>

        </div>

        {/* Admissions */}
        <div className="bg-white p-6 rounded-2xl mb-10">

          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold">
              Admissions Records
            </h2>

            <select
              value={admissionFilter}
              onChange={(e) =>
                setAdmissionFilter(e.target.value)
              }
              className="border p-2 rounded-lg"
            >
              <option value="">All</option>
              <option>PG-DAC</option>
              <option>PG-DBDA</option>
              <option>PG-AI</option>
              <option>PG-FSD</option>
            </select>
          </div>

          <table className="w-full">
            <thead>
              <tr className="bg-slate-100">
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredAdmissions.map((item) => (
                <tr key={item.id} className="text-center border-b">
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.course}</td>
                  <td>
                    <button
                      onClick={() =>
                        window.confirm("Delete?") &&
                        handleDeleteAdmission(item.id)
                      }
                      className="bg-red-500 text-white px-3 py-1 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        {/* Modular */}
        <div className="bg-white p-6 rounded-2xl mb-10">

          <div className="flex justify-between mb-4">
            <h2 className="text-2xl font-bold">
              Modular Records
            </h2>

            <select
              value={modularFilter}
              onChange={(e) =>
                setModularFilter(e.target.value)
              }
              className="border p-2 rounded-lg"
            >
              <option value="">All</option>
              <option>Core Java</option>
              <option>Python</option>
              <option>Spring Boot</option>
              <option>React.js</option>
              <option>MERN Stack</option>
              <option>DSA Java</option>
              <option>DevOps</option>
              <option>Generative AI</option>
            </select>
          </div>

          <table className="w-full">
            <thead>
              <tr className="bg-slate-100">
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredModular.map((item) => (
                <tr key={item.id} className="text-center border-b">
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.course}</td>
                  <td>
                    <button
                      onClick={() =>
                        window.confirm("Delete?") &&
                        handleDeleteModular(item.id)
                      }
                      className="bg-red-500 text-white px-3 py-1 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        {/* Payments */}
        <div className="bg-white p-6 rounded-2xl">

          <h2 className="text-2xl font-bold mb-4">
            Payments Records
          </h2>

          <table className="w-full">
            <thead>
              <tr className="bg-slate-100">
                <th>Name</th>
                <th>Course</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredPayments.map((item) => (
                <tr key={item.id} className="text-center border-b">
                  <td>{item.student_name}</td>
                  <td>{item.course}</td>
                  <td>₹{item.amount}</td>
                  <td>{item.payment_status}</td>
                  <td>
                    <button
                      onClick={() =>
                        window.confirm("Delete?") &&
                        handleDeletePayment(item.id)
                      }
                      className="bg-red-500 text-white px-3 py-1 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>

    </section>
  );
}

export default AdminDashboard;