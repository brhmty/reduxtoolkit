import React from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { itemAmountInc, itemAmountDec } from "../features/cart/cartSlice";
//injectedIn---CartSection.js

function ItemCounter({ item, itemAmount }) {
  const dispatch = useDispatch();
  return (
    <div className="w-min h-min lg:text-2xl md:text-md sm:text-sm xs:text-xs flex flex-col justify-center items-center ">
      <button
        onClick={() => {
          dispatch(itemAmountInc(item.id));
        }}
      >
        <MdOutlineKeyboardArrowUp className="text-primary cursor-pointer hover:text-primary_light" />
      </button>
      <div className="pointer-events-none">{itemAmount}</div>
      <button
        onClick={() => {
          dispatch(itemAmountDec(item.id));
        }}
      >
        <MdOutlineKeyboardArrowDown className="text-primary cursor-pointer hover:text-primary_light" />
      </button>
    </div>
  );
}

export default ItemCounter;
