import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotalPrice } from "./features/cart/cartSlice";
import BtnCartClear from "./components/Buttons/BtnCartClear";
import CartCheckout from "./components/CartCheckout";
import CartSection from "./components/CartSection";
import Filter from "./components/Filter";
import Header from "./components/Header";
import InfoEmpty from "./components/InfoEmpty";
import Modal from "./components/Modal";
import Title from "./components/Title";

function App() {
  const dispatch = useDispatch();
  const {
    cartItems,
    isFilter,
    isModal,
    isCartSection,
    isCartCheckout,
    isBtnCartClear,
    isInfoEmpty,
  } = useSelector((store) => store.cart);

  //to cart amount
  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, [cartItems, dispatch]);

  //to scrolling top and showing/hiding modal
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      window.scrollTo(0, 0);
      html.style.overflow = isModal ? "hidden" : "auto";
    }
  }, [isModal]);

  return (
    <div className="w-100% min-h-screen bg-clr_grey_100 overflow-x-hidden ">
      {isFilter && <Filter />}
      {isModal && <Modal />}
      <Header />
      <Title />
      {isInfoEmpty && <InfoEmpty />}
      {isCartSection && <CartSection />}
      {isCartCheckout && <CartCheckout />}
      {isBtnCartClear && <BtnCartClear />}
    </div>
  );
}

export default App;
