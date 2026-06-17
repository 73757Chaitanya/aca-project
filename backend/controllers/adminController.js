const db = require("../config/db");

/* Admissions Count */
const getAdmissionsCount = (req, res) => {
  const sql =
    "SELECT COUNT(*) AS total FROM admissions";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Error fetching admissions",
      });
    }

    res.json({
      total: result[0].total,
    });
  });
};


/* Modular Count */
const getModularCount = (req, res) => {
  const sql =
    "SELECT COUNT(*) AS total FROM modular_enrollments";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Error fetching modular enrollments",
      });
    }

    res.json({
      total: result[0].total,
    });
  });
};


/* Payments Count */
const getPaymentsCount = (req, res) => {
  const sql =
    "SELECT COUNT(*) AS total FROM payments";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Error fetching payments",
      });
    }

    res.json({
      total: result[0].total,
    });
  });
};


/* Revenue */
const getRevenue = (req, res) => {
  const sql =
    "SELECT SUM(amount) AS revenue FROM payments WHERE payment_status='paid'";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Error fetching revenue",
      });
    }

    res.json({
      revenue: result[0].revenue || 0,
    });
  });
};


/* Admissions Records */
const getAdmissions = (req, res) => {
  const sql =
    "SELECT * FROM admissions ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Error fetching admissions records",
      });
    }

    res.json(result);
  });
};


/* Modular Records */
const getModularEnrollments = (req, res) => {
  const sql =
    "SELECT * FROM modular_enrollments ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Error fetching modular records",
      });
    }

    res.json(result);
  });
};


/* Payments Records */
const getPayments = (req, res) => {
  const sql =
    "SELECT * FROM payments ORDER BY id DESC";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Error fetching payments records",
      });
    }

    res.json(result);
  });
};

const deleteAdmission = (req, res) => {
  const { id } = req.params;

  const sql =
    "DELETE FROM admissions WHERE id = ?";

  db.query(sql, [id], (err) => {
    if (err) {
      return res.status(500).json({
        message: "Delete failed",
      });
    }

    res.json({
      message: "Admission deleted",
    });
  });
};

const deleteModular = (req, res) => {
  const { id } = req.params;

  const sql =
    "DELETE FROM modular_enrollments WHERE id = ?";

  db.query(sql, [id], (err) => {
    if (err) {
      return res.status(500).json({
        message: "Delete failed",
      });
    }

    res.json({
      message: "Modular enrollment deleted",
    });
  });
};

const deletePayment = (req, res) => {
  const { id } = req.params;

  const sql =
    "DELETE FROM payments WHERE id = ?";

  db.query(sql, [id], (err) => {
    if (err) {
      return res.status(500).json({
        message: "Delete failed",
      });
    }

    res.json({
      message: "Payment deleted",
    });
  });
};


module.exports = {
  getAdmissionsCount,
  getModularCount,
  getPaymentsCount,
  getRevenue,
  getAdmissions,
  getModularEnrollments,
  getPayments,
  deleteAdmission,
  deleteModular,
  deletePayment,
};