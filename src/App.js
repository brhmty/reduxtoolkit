import "./App.css";
import CartBtnClear from "./components/CartBtnClear";
import CartCheckout from "./components/CartCheckout";
import CartSection from "./components/CartSection";
import Header from "./components/Header";
import InfoEmpty from "./components/InfoEmpty";
import Title from "./components/Title";

function App() {
  return (
    <div className="w-100% min-h-screen bg-clr_grey_100 overflow-x-hidden ">
      <Header />
      <Title />
      {false && <InfoEmpty />}
      <CartSection />
      <CartCheckout />
      <CartBtnClear />
    </div>
  );
}

export default App;
