import React from "react";
import data from "../utils/cartItems";
//injectedIn---CartSection.js

function Item() {
  return (
    <div className="flex flex-row">
      <img
        src={data[0].img}
        className="lg:w-[32%] md:w-[30%] sm:w-[28%] xs:w-[22%] lg:h-[calc(100vh*14/100)] md:h-[calc(100vh*12/100)] sm:h-[calc(100vh*10/100)] xs:h-[calc(100vh*9/100)]"
      />
      <div className="flex flex-col ml-4">
        <p className="lg:text-lg md:text-md sm:text-sm xs:text-xs font-semibold whitespace-nowrap pointer-events-none">
          {data[0].title}
        </p>
        <p className="lg:text-lg md:text-md sm:text-sm xs:text-xs font-semibold text-clr_grey_5 pointer-events-none">
          ${data[0].price}
        </p>
        <button className="w-fit h-fit lg:text-lg md:text-md sm:text-sm xs:text-xs text-primary hover:text-primary_light">
          remove
        </button>
      </div>
    </div>
  );
}

export default Item;
