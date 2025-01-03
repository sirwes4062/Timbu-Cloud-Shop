import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useReducer, useEffect } from "react";
import { cartReducer } from "./cartReducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || { Items: [] };

  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [cartdropdown, setCartdropdown] = useState(false);
  const [clickedItem, setclickedItem] = useState({});

  return (
    <AppContext.Provider
      value={{
        cart,
        dispatch,
        cartdropdown,
        setCartdropdown,
        clickedItem,
        setclickedItem,
      }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
