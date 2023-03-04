import React from "react";
import { useDispatch } from "react-redux";
import { modalConfirm } from "../../features/cart/cartSlice";

function BtnModalConfirm() {
  const dispatch = useDispatch();
  return (
    <div className="h-fit mx-auto text-center">
      <button
        className="btn-bordered responsive-text_btn responsive-w_btn h-fit my-6 border-primary_dark text-primary_dark hover:bg-primary_light"
        onClick={() => dispatch(modalConfirm())}
      >
        Confirm
      </button>
    </div>
  );
}

export default BtnModalConfirm;
