import "../CSS/homepage.css";
import { Link } from "react-router-dom";

// image slider component
import ImageSlider from "../components/ImageSlider";

// features images
import featureone from "../images/feature-1.png";
import featuretwo from "../images/feature-2.png";
import featurethree from "../images/feature-3.png";
import featurefour from "../images/feature-4.png";

// browsed images
import browseone from "../images/browse1.png";
import browsetwo from "../images/browse2.png";
import browsethree from "../images/browse3.png";
import browsefour from "../images/browse4.png";
import browsefive from "../images/browse5.png";
import browsesix from "../images/browse6.png";

// array of products
import cartItems from "../components/CartItems";

// ICONS
import { CgShoppingCart } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { HiPlus } from "react-icons/hi";
import { HiMinusSmall } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi2";

// CONTEXT-API AND useReducer
import { useContext } from "react";
import { AppContext } from "../components/AppProvider";

const HomePage = () => {
  const { cartdropdown, setCartdropdown, cart, dispatch } =
    useContext(AppContext);

  const removeDropDown = () => {
    setCartdropdown(false);
  };

  const scrollToHeight = () => {
    window.scrollTo({
      top: 1800,
      behavior: "smooth",
    });
  };

  const handleclick = (e) => {
    const ItemId = e.target.id;
    dispatch({ type: "ADD_TO_CART", payload: ItemId });
  };

  const removeItem = (e) => {
    const removeItemId = e.target.id;
    dispatch({ type: "REMOVE_FROM_CART", payload: removeItemId });
  };

  // destructuring Items from cart
  const { Items } = cart;

  const totalPrice = Items.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  // IMCREMENT AND DECREMENT FUNCTION FOR THE CART BUTTON
  // const [counter, setCounter] = useState(1);
  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  // const decrement = () => {
  //   if (counter !== 1) setCounter(counter - 1);
  // };

  return (
    <div className="homepage-container">
      {cartdropdown ? (
        <div className="overlay-container">
          <div className="cart-container">
            <div className="value-and-cross">
              <div className="value-name">
                <h3>My Cart</h3>
                <div className="product-number">{Items.length}</div>
              </div>

              <div className="cross" onClick={removeDropDown}>
                <RxCross2 />
              </div>
            </div>

            {Items.length === 0 ? (
              <h2 className="empty-cart">The Cart is Empty</h2>
            ) : (
              Items.map((theItem) => {
                return (
                  <div className="item-name-increase" key={theItem.id}>
                    <div className="cart-image">
                      <img src={theItem.image} alt="" className="the-image" />
                    </div>

                    <div className="name-increment-amount-container">
                      <div className="name-increment">
                        <h3>{theItem.name}</h3>
                        <h4>{"$." + theItem.price}</h4>
                      </div>

                      <div className="amount-and-delete">
                        <div className="increment">
                          <HiMinusSmall />
                          <h5 className="increment-counter">1</h5>
                          <HiPlus />
                        </div>
                        <div className="trash-icon">
                          <HiOutlineTrash
                            onClick={removeItem}
                            id={theItem.id}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}

            <hr className="horizontal-line" />
            <div className="subtotal">
              <div className="subtotal-price">
                <h3>Subtotal</h3>
                <h3>{"$. " + totalPrice.toFixed(2)}</h3>
              </div>

              <Link to="/checkoutPage" className="checking-out">
                <div className="buy-now-button">
                  <h4>Check out</h4>
                </div>
              </Link>
            </div>
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
          At Nature Bounty, we are committed to nurturing both people and the
        </p>
        <p>
          planet. Dive into our world of eco-friendly products sourced with care
          and
        </p>
        <p>consideration for the environment.</p>
      </div>

      {/* <a href="#product-page" className="product-page-anchor"> */}
      <div className="hero-paragraph2" onClick={scrollToHeight}>
        <p>Discover Eco-Friendly Products</p>
      </div>
      {/* </a> */}

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

        <div className="popular-item">
          {cartItems.map((item, id) => (
            <div className="item" key={id}>
              <Link to={`/productpage/${item.id}`}>
                <img src={item.image} alt={item.name} className="item-image" />
              </Link>
              <div className="name-and-price">
                <p className="item-name">{item.name}</p>
                <h1 className="item-price">$124</h1>
              </div>

              {/* ADD TO CART BUTTON */}
              <div className="cart-and-love">
                <div className="cart-button" onClick={handleclick} id={item.id}>
                  Add to cart
                  <CgShoppingCart className="cart-icon" />
                </div>
              </div>

              {/* END DOF ADD TO CART BUTTON */}
            </div>
          ))}
        </div>
      </div>
      {/*END OF POPULAR BEST SELLING PRODUTS */}
    </div>
  );
};

export default HomePage;
