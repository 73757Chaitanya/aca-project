const express = require("express");
const router = express.Router();

const {
  createPlacementApplication,
} = require("../controllers/placementController");

router.post("/", createPlacementApplication);

module.exports = router;