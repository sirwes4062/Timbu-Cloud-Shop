import "../CSS/navbar.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";
import { useContext } from "react";
import { AppContext } from "./AppProvider";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { cartdropdown, setCartdropdown, cart } = useContext(AppContext);

  const cartToggle = () => {
    setCartdropdown(!cartdropdown);
  };

  const scrollToHeight = () => {
    window.scrollTo({
      top: 1800,
      behavior: "smooth",
    });
  };

  // destructuring Items from cart
  const { Items } = cart;

  return (
    <div>
      <div className="container">
        <nav className="navbar">
          <div className="company-logo">
            <h1>Nature Bounty</h1>
          </div>

          <ul>
            <Link to={"/"} className="home">
              <li>Home</li>
            </Link>

            <div
              className="shop-logo"
              style={{ cursor: "pointer" }}
              onClick={scrollToHeight}>
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

          <div className="search-button-mobile">
            <FiSearch className="search-icon-mobile" />
            <input
              type="text"
              placeholder="search"
              className="input-search-mobile"
            />
          </div>

          <div className="other-buttons">
            <div className="right-list">
              <IoPersonOutline className="right-list-icon" />
            </div>
            <div
              className="right-list  cart-icon-and-counter"
              onClick={cartToggle}>
              <CgShoppingCart className="right-list-icon" />
              <div className="cart-item-counter">
                <h6>{Array.isArray(Items) && Items.length === 0}</h6>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
