const db = require("../config/db");

const createPlacementApplication = (req, res) => {
  const {
    name,
    email,
    phone,
    qualification,
    passout_year,
    university,
    branch,
    course,
    preferred_role,
    skills,
    experience,
  } = req.body;

  const resume =
    req.files["resume"]
      ? req.files["resume"][0].filename
      : null;

  const profile_pic =
    req.files["profile_pic"]
      ? req.files["profile_pic"][0].filename
      : null;

  const sql = `
    INSERT INTO placement_applications
    (
      name,
      email,
      phone,
      qualification,
      passout_year,
      university,
      branch,
      course,
      preferred_role,
      skills,
      experience,
      resume,
      profile_pic
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      name,
      email,
      phone,
      qualification,
      passout_year,
      university,
      branch,
      course,
      preferred_role,
      skills,
      experience,
      resume,
      profile_pic,
    ],
    (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          message: "Application failed",
        });
      }

      res.status(201).json({
        message:
          "Placement application submitted successfully",
      });
    }
  );
};

module.exports = {
  createPlacementApplication,
};