import React from "react";
import IconCart from "./IconCart";
//injectedIn---App.js

function Header() {
  return (
    <div className="w-full h-20 flex justify-around items-center bg-primary pointer-events-none">
      <p className="lg:text-4xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-bold text-white">
        ReduxTool
      </p>
      <div className="w-fit h-full relative flex items-center">
        <div className="h-[35%] aspect-square rounded-full absolute top-3 -right-4 flex justify-center items-center text-white bg-primary_light">
          <p className="w-fit h-fit lg:text-lg max-lg:text-lg max-md:text-base font-semibold max-sm:text-sm">
            0
          </p>
        </div>
        <IconCart />
      </div>
    </div>
  );
}

export default Header;
