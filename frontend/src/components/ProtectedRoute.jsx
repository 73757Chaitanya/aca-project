import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token =
    localStorage.getItem("token");

  const role =
    localStorage.getItem("role");

  /* No login */
  if (!token) {
    return <Navigate to="/login" />;
  }

  /* Not admin */
  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;