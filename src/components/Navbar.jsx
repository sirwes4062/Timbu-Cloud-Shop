import "../CSS/navbar.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import { useContext } from "react";
import { AppContext } from "./AppProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartdropdown, setCartdropdown } = useContext(AppContext);

  // onclick for cart toggle icon
  const cartToggle = () => {
    setCartdropdown(!cartdropdown);
  };
  // //////////////////////////

  return (
    <div>
      <div className="container">
        <nav className="navbar">
          {/* hamburger logo */}
          <RxHamburgerMenu className="hamburger" />

          <div  className="company-logo" >
            <h1>Nature's Bounty</h1>
          </div>

          <ul>
            <Link to={'/'} className="home">
              <li>Home</li>
            </Link>

            <div className="shop-logo">
              <li>Shop</li>
              <IoMdArrowDropdown className="shop-list-icon" />
            </div>
          </ul>

          <div className="search-button">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="search for Eco friendly product"
              className="input-search"
            />
          </div>

          {/* BUTTON AT THE LEFT OF THE NAVBAR */}
          <div className="other-buttons">
            <div className="right-list">
              <IoPersonOutline className="right-list-icon" />
            </div>

            {/* ///////////// */}
            <div className="right-list" onClick={cartToggle}>
              <CgShoppingCart className="right-list-icon" />
            </div>
            {/* ////////////// */}
          </div>
        </nav>

        {/* mobile desi */}
      </div>
    </div>
  );
};

export default Navbar;
