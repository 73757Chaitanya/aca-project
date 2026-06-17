const db = require("../config/db");

const createContact = (req, res) => {
  const { name, email, subject, message } = req.body;

  const sql =
    "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [name, email, subject, message],
    (err, result) => {
      if (err) {
        console.log(err);
        return res
          .status(500)
          .json({ message: "Error saving message" });
      }

      res.status(201).json({
        message: "Message sent successfully",
      });
    }
  );
};

module.exports = {
  createContact,
};