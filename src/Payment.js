import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
        {/*Payment Section - delivery address */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
          </div>
        </div>
        {/*Payment Section - review item*/}
        <div className="payment_section"></div>
        {/*Payment Section - payment method */}
        <div className="payment_section"></div>
      </div>
    </div>
  );
};

export default Payment;
