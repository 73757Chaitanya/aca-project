const express = require("express");
const cors = require("cors");
const db = require("./config/db");
require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const authRoutes = require("./routes/authRoutes");
const admissionRoutes = require("./routes/admissionRoutes");
const app = express();
const adminRoutes = require("./routes/adminRoutes");
const modularRoutes = require("./routes/modularRoutes");
const placementRoutes = require("./routes/placementRoutes");
const paymentRoutes =
require("./routes/paymentRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/admission", admissionRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/modular", modularRoutes);
app.use("/api/placement", placementRoutes);
app.use(
  "/api/payment",
  paymentRoutes
);
console.log("Admin routes loaded");
app.get("/", (req, res) => {
  res.send("ACA Backend Running...");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});