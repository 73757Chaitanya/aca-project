const db = require("../config/db");

const createPlacementApplication = (req, res) => {
  const {
    name,
    email,
    phone,
    course,
    preferred_role,
    skills,
  } = req.body;

  const sql =
    "INSERT INTO placement_applications (name,email,phone,course,preferred_role,skills) VALUES (?,?,?,?,?,?)";

  db.query(
    sql,
    [
      name,
      email,
      phone,
      course,
      preferred_role,
      skills,
    ],
    (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          message: "Application failed",
        });
      }

      res.status(201).json({
        message: "Placement application submitted successfully",
      });
    }
  );
};

module.exports = {
  createPlacementApplication,
};