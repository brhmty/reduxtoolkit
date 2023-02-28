import React from "react";
import Item from "./Item";
import ItemCounter from "./ItemCounter";
//injectedIn---App.js

function CartSection() {
  return (
    <div className="w-[60%] h-min border-b-2 border-b-clr_grey_1 flex flex-col mt-32 mx-auto pb-10 ">
      <div className=" flex flex-row justify-between mt-4">
        <Item />
        <ItemCounter />
      </div>
      <div className=" flex flex-row justify-between mt-4">
        <Item />
        <ItemCounter />
      </div>
      <div className=" flex flex-row justify-between mt-4">
        <Item />
        <ItemCounter />
      </div>
      <div className=" flex flex-row justify-between mt-4">
        <Item />
        <ItemCounter />
      </div>
    </div>
  );
}

export default CartSection;
