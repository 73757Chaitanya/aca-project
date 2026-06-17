const db = require("../config/db");

const createModularEnrollment = (req, res) => {
  const {
    name,
    email,
    phone,
    course,
    profession,
  } = req.body;

  const sql =
    "INSERT INTO modular_enrollments (name,email,phone,course,profession) VALUES (?,?,?,?,?)";

  db.query(
    sql,
    [name, email, phone, course, profession],
    (err, result) => {
      if (err) {
        console.log(err);

        return res.status(500).json({
          message: "Enrollment failed",
        });
      }

      res.status(201).json({
        message: "Enrollment successful",
      });
    }
  );
};

module.exports = {
  createModularEnrollment,
};