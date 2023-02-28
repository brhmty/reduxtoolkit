import React from "react";
//injectedIn---App.js

function CartCheckout() {
  return (
    <div className="w-[60%] flex justify-between mt-2 mx-auto">
      <p className="lg:text-lg md:text-md sm:text-sm xs:text-xs font-semibold">
        Total
      </p>
      <p className="lg:text-lg md:text-md sm:text-sm xs:text-xs font-semibold">
        TotalAmount
      </p>
    </div>
  );
}

export default CartCheckout;
