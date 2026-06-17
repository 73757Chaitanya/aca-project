const express = require("express");
const router = express.Router();

const {
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

} = require("../controllers/adminController");


/* Dashboard Stats */
router.get(
  "/admissions-count",
  getAdmissionsCount
);

router.get(
  "/modular-count",
  getModularCount
);

router.get(
  "/payments-count",
  getPaymentsCount
);

router.get(
  "/revenue",
  getRevenue
);


/* Records APIs */
router.get(
  "/admissions",
  getAdmissions
);

router.get(
  "/modular",
  getModularEnrollments
);

router.get(
  "/payments",
  getPayments
);

router.delete(
  "/admission/:id",
  deleteAdmission
);

router.delete(
  "/modular/:id",
  deleteModular
);

router.delete(
  "/payment/:id",
  deletePayment
);

module.exports = router;