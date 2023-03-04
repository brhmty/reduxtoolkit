import React from "react";
import { useDispatch } from "react-redux";
import { modalCancel } from "../../features/cart/cartSlice";

function BtnModalCancel() {
  const dispatch = useDispatch();
  return (
    <div className="h-fit mx-auto text-center">
      <button
        className="btn-bordered responsive-text_btn responsive-w_btn h-fit my-6 border-clr_red_dark text-clr_red_dark hover:bg-clr_red_light"
        onClick={() => dispatch(modalCancel())}
      >
        Cancel
      </button>
    </div>
  );
}

export default BtnModalCancel;
