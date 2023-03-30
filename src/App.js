import { useState } from "react";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import productData from "./card.json";
import ShoppingCart from "./Components/shoppingCart";

function App() {
  const [count, setCount] = useState(0);
  const [btnData, setBtnData] = useState(productData);
  const [cartItems, setCartItems] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  // const updateCountNum = () => {};
  const updateBtn = (id, card, price) => {
    let tempCard = { id, card };
    let tempCard1 = [id, card, price];
    setCartItems([...cartItems, tempCard]);
    setShoppingCart([...shoppingCart, tempCard1]);

    setCount(shoppingCart.length + 1);

    let temp = btnData;
    temp[id].btnShow = true;
    setBtnData([...temp]);
  };
  const removeCart = (id) => {
    setShoppingCart(shoppingCart.filter((value) => value[0] !== id));
    let temp = btnData;
    temp[id].btnShow = false;
    setBtnData([...temp]);
    setCount(shoppingCart.length - 1);
  };

  return (
    <>
      <Nav count={count} />
      <Header />
      <Products updateBtn={updateBtn} />
      <Footer />
      <ShoppingCart shoppingCart={shoppingCart} removeCart={removeCart} />
    </>
  );
}

export default App;
