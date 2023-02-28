import React from "react";
import { SlBasket } from "react-icons/sl";
import { SlBasketLoaded } from "react-icons/sl";
//injectedIn---Header.js

function IconCart() {
  return (
    <>
      {true ? (
        <SlBasketLoaded className="lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-white" />
      ) : (
        <SlBasket className="lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-white" />
      )}
    </>
  );
}

export default IconCart;
