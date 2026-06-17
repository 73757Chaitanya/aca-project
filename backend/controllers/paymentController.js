const Razorpay = require("razorpay");
const crypto = require("crypto");
const db = require("../config/db");   // your mysql connection file

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


/* CREATE ORDER */
exports.createOrder = async (req, res) => {
  console.log(process.env.RAZORPAY_KEY_ID);
  console.log(process.env.RAZORPAY_KEY_SECRET);
  try {
    const { amount, name, email, course } = req.body;
    console.log("Received:", amount, name, email, course);
    const options = {
      amount: amount * 100,     // paisa
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      order,
      name,
      email,
      course,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Order creation failed",
    });
  }
};


/* VERIFY PAYMENT */
exports.verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      name,
      email,
      course,
      amount,
    } = req.body;

    const generatedSignature =
      crypto
        .createHmac(
          "sha256",
          process.env.RAZORPAY_KEY_SECRET
        )
        .update(
          razorpay_order_id +
          "|" +
          razorpay_payment_id
        )
        .digest("hex");

    if (
      generatedSignature === razorpay_signature
    ) {
      db.query(
        `
        INSERT INTO payments
        (
          student_name,
          email,
          course,
          amount,
          razorpay_order_id,
          razorpay_payment_id,
          payment_status
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
        [
          name,
          email,
          course,
          amount,
          razorpay_order_id,
          razorpay_payment_id,
          "paid",
        ]
      );

      return res.status(200).json({
        success: true,
        message: "Payment successful",
      });
    }

    res.status(400).json({
      message: "Payment verification failed",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};