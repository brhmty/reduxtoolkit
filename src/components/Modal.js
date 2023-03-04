import React from "react";
import BtnModalConfirm from "./Buttons/BtnModalConfirm";
import BtnModalCancel from "./Buttons/BtnModalCancel";
//insertedIn---App.js

function Modal() {
  return (
    <div className="lg:w-[30%] md:w-[45%] sm:w-[55%] xs:w-[85%] h-fit absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] z-20 bg-white">
      <h4 className="text-xl text-center font-bold mt-6">
        Remove All Items From Your Shopping Cart?
      </h4>
      <div className="flex justify-around">
        <BtnModalConfirm />
        <BtnModalCancel />
      </div>
    </div>
  );
}

export default Modal;
