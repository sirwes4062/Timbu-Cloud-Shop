import "../CSS/productpage.css";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../components/AppProvider";
import cartItems from "../components/CartItems";
import { FaStar } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";
import { HiMinusSmall } from "react-icons/hi2";
import { LiaStoreAltSolid } from "react-icons/lia";

const ProductPage = () => {
  const { dispatch } = useContext(AppContext);

  const { productId } = useParams();
  const newClicked = cartItems.find((e) => e.id === Number(productId));

  const [menu, setmenu] = useState("circle1");
  const [sqauremenu, setSquareMenu] = useState("square1");

  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter !== 0) setCounter(counter - 1);
  };

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: newClicked.id });
  };

  return (
    <div className="ProductContainer">
      <div className="clicked-product-images">
        <div className="category">
          <p className="others">Items</p>
          <span>/</span>
          <p className="category-item">{newClicked.name}</p>
        </div>

        <div className="bigger-image">
          <img src={newClicked.image} alt="big-image" />
        </div>

        <div className="smaller-images">
          <div className="smallone">
            <img src={newClicked.image} alt="smallImageOne" />
          </div>
          <div className="smallone">
            <img src={newClicked.image} alt="smallImageTwo" />
          </div>
          <div className="smallone">
            <img src={newClicked.image} alt="smallImageThree" />
          </div>
          <div className="smallone">
            <img src={newClicked.image} alt="smallImagefour" />
          </div>
        </div>
      </div>

      {/* NAME,DESCRIPT,SIZE AND QUANTITY*/}

      <div className="left-container">
        <div className="name-description-size">
          <div className="name">
            <h1>{newClicked.name}</h1>
            <p>{newClicked.description}</p>
            <div className="four-stars">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <h4>(121)</h4>
            </div>
            <div className="price">
              <h3>{"$ " + newClicked.price}</h3>
            </div>
          </div>
        </div>

        {/*END OF NAME,DESCRIPT,SIZE AND QUANTITY*/}

        <div className="color-chooser">
          <p>Choose a Color</p>

          <div className="four-circles">
            <div
              className={menu === "circle1" ? "outer" : ""}
              onClick={() => {
                setmenu("circle1");
              }}>
              <div className="circle1 "></div>
            </div>

            <div
              className={menu === "circle2" ? "outer" : ""}
              onClick={() => {
                setmenu("circle2");
              }}>
              <div className="circle2 "></div>
            </div>

            <div
              className={menu === "circle3" ? "outer" : ""}
              onClick={() => {
                setmenu("circle3");
              }}>
              <div className="circle3 "></div>
            </div>

            <div
              className={menu === "circle4" ? "outer" : ""}
              onClick={() => {
                setmenu("circle4");
              }}>
              <div className="circle4 "></div>
            </div>

            <div
              className={menu === "circle5" ? "outer" : ""}
              onClick={() => {
                setmenu("circle5");
              }}>
              <div className="circle5 "></div>
            </div>
          </div>
        </div>

        <div className="sizes">
          <p className="size-paragraph">Select size</p>

          <div className="all-square">
            <div
              className={sqauremenu === "square1" ? "outer-square" : ""}
              onClick={() => {
                setSquareMenu("square1");
              }}>
              <div className="square">XL</div>
            </div>

            <div
              className={sqauremenu === "square2" ? "outer-square" : ""}
              onClick={() => {
                setSquareMenu("square2");
              }}>
              <div className="square">L</div>
            </div>

            <div
              className={sqauremenu === "square3" ? "outer-square" : ""}
              onClick={() => {
                setSquareMenu("square3");
              }}>
              <div className="square">M</div>
            </div>

            <div
              className={sqauremenu === "square4" ? "outer-square" : ""}
              onClick={() => {
                setSquareMenu("square4");
              }}>
              <div className="square">S</div>
            </div>
          </div>
        </div>

        <div className="quantity">
          <p>Quantity</p>

          <div className="counter-and-no-left">
            <div className="counter">
              <HiMinusSmall onClick={decrement} />
              <p>{counter}</p>
              <HiPlus onClick={increment} />
            </div>

            <div className="no-left">
              <p>
                Only <span>12 items </span>left! <br />
                Don not miss out
              </p>
            </div>
          </div>
        </div>

        <div className="buy-now-add-cart-button">
          <div className="buy-now">
            <p>Buy now</p>
          </div>

          {/* USE THE ADD TO CART BUTTON TO DISPATCH TO THE ARRAY */}
          <div className="add-to-cart-product" onClick={addToCart}>
            <p>Add to Cart</p>
          </div>
        </div>

        <div className="free-delivery">
          <div className="delivery-icon"></div>

          <div className="delivery-words">
            <LiaStoreAltSolid className="store-font" />
            <div className="the-words">
              <h4>Free Delivery</h4>
              <p>Enter your Postal Code for Delivery Availability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
