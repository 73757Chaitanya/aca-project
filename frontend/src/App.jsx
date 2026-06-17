import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import ProgramDetails from "./pages/ProgramDetails";
import Admissions from "./pages/Admissions";
import Placements from "./pages/Placements";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ModularEnrollment from "./pages/ModularEnrollment";
import PlacementRegistration from "./pages/PlacementRegistration";
import Payment from "./pages/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Layout Routes */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/programs" element={<Courses />} />

          <Route
            path="/programs/:programId"
            element={<ProgramDetails />}
          />

          <Route
            path="/admissions"
            element={<Admissions />}
          />

          <Route
            path="/placements"
            element={<Placements />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

        </Route>

        {/* Other Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/modular-enrollment"
          element={<ModularEnrollment />}
        />

        <Route
          path="/placement-registration"
          element={<PlacementRegistration />}
        />

        <Route
          path="/payment"
          element={<Payment />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;