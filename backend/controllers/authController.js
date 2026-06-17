const db = require("../config/db");
const jwt = require("jsonwebtoken");

const loginUser = (req, res) => {
  const { email, password } = req.body;

  const sql =
    "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Server Error",
      });
    }

    if (result.length === 0) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    const user = result[0];

    /* Plain password check for now */
    if (user.password !== password) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    /* JWT Token */
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      "secretkey123",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      role: user.role,
    });
  });
};

module.exports = {
  loginUser,
};