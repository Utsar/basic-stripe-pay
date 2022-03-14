import React from "react";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";

const KEY = process.env.STRIPE_PUBLIC_KEY;

const Pay = () => {
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Hire Utsar"
        image="https://images.pexels.com/photos/7148673/pexels-photo-7148673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
