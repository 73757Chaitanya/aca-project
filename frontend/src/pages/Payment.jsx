import { useState } from "react";

function Payment() {
  const [loading, setLoading] = useState(false);

  const paymentData = JSON.parse(
    localStorage.getItem("paymentData")
  );

  const handlePayment = async () => {
    try {
      setLoading(true);
       console.log("Payment Data:", paymentData);
      const response = await fetch(
        "http://localhost:5000/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            amount: paymentData.amount,
            name: paymentData.name,
            email: paymentData.email,
            course: paymentData.course,
          }),
        }
      );

      const data = await response.json();

      const options = {
        key: "rzp_test_T2ZkWx96b0lrSx",
        amount: data.order.amount,
        currency: "INR",
        name: "ACA",
        description: "Course Payment",
        order_id: data.order.id,

        handler: async function (response) {
          const verifyResponse = await fetch(
            "http://localhost:5000/api/payment/verify-payment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },

              body: JSON.stringify({
                razorpay_order_id:
                  response.razorpay_order_id,

                razorpay_payment_id:
                  response.razorpay_payment_id,

                razorpay_signature:
                  response.razorpay_signature,

                name: paymentData.name,
                email: paymentData.email,
                course: paymentData.course,
                amount: paymentData.amount,
              }),
            }
          );

          const result =
            await verifyResponse.json();

          alert(result.message);
        },
      };

      const razor =
        new window.Razorpay(options);

      razor.open();

      setLoading(false);

    } catch (error) {
      console.log(error);
      alert("Payment failed");
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Payment Portal
        </h1>

        <div className="space-y-3 text-gray-700">

          <p>
            <strong>Name:</strong>{" "}
            {paymentData.name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {paymentData.email}
          </p>

          <p>
            <strong>Course:</strong>{" "}
            {paymentData.course}
          </p>

          <p>
            <strong>Category:</strong>{" "}
            {paymentData.category}
          </p>

          <p className="text-2xl font-bold text-cyan-600">
            ₹{paymentData.amount}
          </p>

        </div>

        <button
          onClick={handlePayment}
          className="
            mt-8
            w-full
            bg-gradient-to-r
            from-cyan-500
            to-blue-600
            text-white
            py-3
            rounded-xl
            font-semibold
          "
        >
          {loading
            ? "Loading..."
            : `Pay ₹${paymentData.amount}`}
        </button>

      </div>

    </section>
  );
}

export default Payment;