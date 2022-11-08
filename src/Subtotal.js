import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/*Part of homework */}
              Subtotal (0 items): <strong>0</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkout" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} /*Part of homework */
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      ></CurrencyFormat>

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
