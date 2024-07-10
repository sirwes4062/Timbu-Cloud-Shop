// src/AppContext.js
import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create the context
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [cartdropdown, setCartdropdown] = useState(false);

  const [cartArray, setCartArray] = useState([]);

  return (
    <AppContext.Provider
      value={{ cartdropdown, setCartdropdown, cartArray, setCartArray }}>
      {children}
    </AppContext.Provider>
  );
};

// Prop validation
AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
