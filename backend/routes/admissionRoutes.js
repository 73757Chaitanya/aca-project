const express = require("express");
const router = express.Router();

const {
  createAdmission,
} = require("../controllers/admissionController");

router.post("/", createAdmission);

module.exports = router;