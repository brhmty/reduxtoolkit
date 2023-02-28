import React from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
//injectedIn---CartSection.js

function ItemCounter() {
  return (
    <div className="w-min h-min lg:text-2xl md:text-md sm:text-sm xs:text-xs flex flex-col justify-center items-center ">
      <MdOutlineKeyboardArrowUp className="text-primary" />
      <div className="pointer-events-none">0</div>
      <MdOutlineKeyboardArrowDown className="text-primary" />
    </div>
  );
}

export default ItemCounter;
