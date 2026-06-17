const express = require("express");
const router = express.Router();

const {
  createModularEnrollment,
} = require("../controllers/modularController");

router.post("/", createModularEnrollment);

module.exports = router;