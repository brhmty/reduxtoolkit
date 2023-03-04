import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import ItemCounter from "./ItemCounter";
//injectedIn---App.js

function CartSection() {
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <div className="w-[60%] h-min border-b-2 border-b-clr_grey_1 flex flex-col mt-32 mx-auto pb-10 ">
      {cartItems.map((item) => {
        return (
          <div className="flex flex-row justify-between mt-4" key={item.id}>
            <Item item={item} />
            <ItemCounter item={item} itemAmount={item.amount} />
          </div>
        );
      })}
    </div>
  );
}

export default CartSection;
