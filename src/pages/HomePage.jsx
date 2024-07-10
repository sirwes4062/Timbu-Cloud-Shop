import "../CSS/homepage.css";
import ImageSlider from "../components/ImageSlider";
import featureone from "../images/feature-1.png";
import featuretwo from "../images/feature-2.png";
import featurethree from "../images/feature-3.png";
import featurefour from "../images/feature-4.png";

import browseone from "../images/browse1.png";
import browsetwo from "../images/browse2.png";
import browsethree from "../images/browse3.png";
import browsefour from "../images/browse4.png";
import browsefive from "../images/browse5.png";
import browsesix from "../images/browse6.png";

import { CgShoppingCart } from "react-icons/cg";

import cartItems from "../components/CartItems";
import { RxCross2 } from "react-icons/rx";

import { HiPlus } from "react-icons/hi";
import { HiMinusSmall } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi2";

import { useContext } from "react";
import { AppContext } from "../components/AppProvider";

import product from "../components/CartItems";

import { Link } from "react-router-dom";

const HomePage = () => {
  // SCROLL FUNCTIONALITY TO SCROLL DOWN THE PAGE TO THE PRODUCTS
  const scrollToProduct = () => {
    window.scrollTo({
      top: 1950,
      behaviour: "smooth",
    });
  };

  const { cartdropdown, setCartdropdown, cartArray, setCartArray } =
    useContext(AppContext);

  // FUNCTION TO REMOVE DROPDOWN
  const removeDropDown = () => {
    setCartdropdown(false);
  };

  const handleclick = (e) => {
    const addedProduct = e.target.id;
    console.log(addedProduct);
    const productObject = product.find(
      (product) => product.name === addedProduct
    );
    console.log(productObject);
    if (productObject) {
      setCartArray([...cartArray, productObject]);
    }
  };

  const deleteHandle = (e) => {
    const number = e.target.id;
    console.log(number);
    const remainingProduct = cartArray.filter((product) => {
      product.name !== number;
    });
    console.log(remainingProduct);
    setCartArray(remainingProduct);
  };

  return (
    <div className="homepage-container">
      {cartdropdown ? (
        <div className="overlay-container">
          <div className="cart-container">
            <div className="value-and-cross">
              <div className="value-name">
                <h3>My Cart</h3>
                <div className="product-number">0</div>
              </div>

              {/* CROSS TO REMOVE CART DROOP DOWN */}
              <div className="cross" onClick={removeDropDown}>
                <RxCross2 />
              </div>
            </div>

            {cartArray.map((item) => {
              return (
                <div className="item-name-increase" key={item.id}>
                  <div className="image">
                    <img src={item.image} alt="" className="the-image" />
                  </div>
                  <div className="name-increment">
                    <h3>{item.name}</h3>
                    <div className="increment">
                      <HiPlus />
                      <p>1</p>
                      <HiMinusSmall />
                    </div>
                  </div>
                  <div className="amount-and-delete">
                    <h3>$144</h3>
                    <HiOutlineTrash id={item.name} onClick={deleteHandle} />
                  </div>
                </div>
              );
            })}

            <hr className="horizontal-line" />
            <div className="subtotal">
              <p>Subtotal</p>
              <h3>$0.00</h3>
            </div>

            <hr className="horizontal-line" />

            <Link to="/checkoutPage">
              <div className="buy-now-button">
                <h4>Check out</h4>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* THE END OF THE CART DROP DOWN PAGE */}

      <div className="award">
        <p>🏆 2023 & 2024 AWARD WINNING ECO-FRIENDLY STORE</p>
      </div>

      <div className="main-header">
        <h1>
          Enjoy Sustainable and <span>Healthy Living </span>
        </h1>
        <h1> with Our Eco-Friendly Products </h1>
      </div>

      <div className="hero-paragraph">
        <p>
          At Nature's Bounty, we're committed to nurturing both people and the
        </p>
        <p>
          planet. Dive into our world of eco-friendly products sourced with care
          and
        </p>
        <p>consideration for the environment.</p>
      </div>

      <div className="hero-paragraph2" onClick={scrollToProduct}>
        <p>Discover Eco-Friendly Products</p>
      </div>

      {/* IMAGE SLIDDER */}
      <ImageSlider />

      {/* FEATURED PRODUCTS */}
      <div className="featured-product">
        <h1>Featured product</h1>
        <p>Browse through our featured eco-friendly products of the day.</p>
        <div className="feat-items">
          <img src={featureone} alt="" className=" feat feat-item-1" />
          <img src={featuretwo} alt="" className=" feat feat-item-2" />
          <img src={featurethree} alt="" className="feat feat-tem-3" />
          <img src={featurefour} alt="" className="feat feat-item-4" />
        </div>
      </div>
      {/*END OF FEATURED PRODUCTS */}

      {/* BROWSING TROUGH COLLECTION */}
      <div className="browse-collection">
        <h1>Browse Through Our Collections</h1>
        <p>
          We have different categories of Eco-friendly products to cater and
          suit every of your needs and wants.
        </p>
        <div className="browse-items">
          <div className="browseone-container">
            <img src={browseone} alt="" className="browse browse-item-one" />
            <p>Organic Food Products</p>
          </div>

          <div className="browse-container">
            <img src={browsetwo} alt="" className="browse browse-item-two" />
            <p> Eco-friendly household products</p>
          </div>

          <div className="browse-container">
            <img
              src={browsethree}
              alt=""
              className="browse browse-item-three"
            />
            <p> Sustainable personal care products </p>
          </div>
          <div className="browse-container">
            <img src={browsefour} alt="" className="browse browse-item-four" />
            <p> Clothing and textiles </p>
          </div>
          <div className="browse-container">
            <img src={browsefive} alt="" className="browse browse-item-five" />

            <p> Reusable and sustainable lifestyle products </p>
          </div>
          <div className="browse-container">
            <img src={browsesix} alt="" className="browse browse-item-six" />
            <p>Reusable and Biodegradable packaging</p>
          </div>
        </div>
      </div>
      {/* END OF BROWSING THROUGH COLLECTION */}

      {/* POPULAR BEST SELLING PRODUTS */}
      <div className="popular-container">
        <h1>Popular best selling products</h1>

        <p className="popular-paragraph">
          Browse through some of the most purchased eco-friendly products
        </p>

        {/* ADD A GROW EFFECT TO THE CONTAINER */}
        <div className="popular-item">
          {cartItems.map((item, id) => (
            <div className="item" key={id}>
              <img src={item.image} alt={item.name} className="item-image" />

              <div className="name-and-price">
                <p className="item-name">{item.name}</p>
                <h1 className="item-price">$124</h1>
              </div>
              <div className="cart-and-love">
                <div
                  className="cart-button"
                  onClick={handleclick}
                  id={item.name}>
                  Add to cart
                  <CgShoppingCart className="cart-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*END OF POPULAR BEST SELLING PRODUTS */}
    </div>
  );
};

export default HomePage;
