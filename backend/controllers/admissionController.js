const db = require("../config/db");

const createAdmission = (req, res) => {
  const {
    name,
    email,
    phone,
    course,
    qualification,
  } = req.body;

  const sql =
    "INSERT INTO admissions (name,email,phone,course,qualification) VALUES (?,?,?,?,?)";

  db.query(
    sql,
    [name, email, phone, course, qualification],
    (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          message: "Admission failed",
        });
      }

      res.status(201).json({
        message: "Application submitted successfully",
      });
    }
  );
};

module.exports = {
  createAdmission,
};