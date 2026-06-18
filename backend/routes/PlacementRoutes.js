const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  createPlacementApplication,
} = require("../controllers/placementController");


/* MULTER STORAGE */

const storage = multer.diskStorage({
  destination: function (req, file, cb) {

    if (file.fieldname === "resume") {
      cb(null, "uploads/resumes");
    }

    else if (file.fieldname === "profile_pic") {
      cb(null, "uploads/profilepics");
    }
  },

  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() +
        "-" +
        file.originalname
    );
  },
});


const upload = multer({
  storage: storage,
});


/* ROUTE */

router.post(
  "/",

  upload.fields([
    {
      name: "resume",
      maxCount: 1,
    },

    {
      name: "profile_pic",
      maxCount: 1,
    },
  ]),

  createPlacementApplication
);

module.exports = router;