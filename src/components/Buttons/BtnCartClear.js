import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
//injectedIn---App.js

function BtnCartClear() {
  const dispatch = useDispatch();
  return (
    <div className="h-fit mx-auto my-4 pb-9 text-center">
      <button
        className="btn-bordered responsive-text_btn w-min h-fit border-clr_red_dark text-clr_red_dark hover:bg-clr_red_light"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
    </div>
  );
}

export default BtnCartClear;
