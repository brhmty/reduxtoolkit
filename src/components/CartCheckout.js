import React from "react";
import { useSelector } from "react-redux";
//injectedIn---App.js

function CartCheckout() {
  const { totalPrice } = useSelector((store) => store.cart);

  return (
    <div className="w-[60%] flex justify-between mt-2 mx-auto">
      <p className="lg:text-lg md:text-md sm:text-sm xs:text-xs font-semibold pointer-events-none">
        Total
      </p>
      <p className="lg:text-lg md:text-md sm:text-sm xs:text-xs font-semibold pointer-events-none">
        ${totalPrice}
      </p>
    </div>
  );
}

export default CartCheckout;
