import React from "react";
//injectedIn---App.js

function CartBtnClear() {
  return (
    <div className="h-fit mx-auto my-4 pb-9 text-center">
      <button className="w-min h-fit border-2 border-clr_red_dark lg:text-lg md:text-md sm:text-sm xs:text-xs whitespace-nowrap font-medium px-2 text-clr_red_dark hover:bg-clr_red_light">
        Clear Cart
      </button>
    </div>
  );
}

export default CartBtnClear;
