import "../CSS/checkout.css";
import { SlCalender } from "react-icons/sl";
import { IoLockClosedOutline } from "react-icons/io5";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../components/AppProvider";

const CheckoutPage = () => {
  // RADIO-BUTTON CHECKING OPTIONS
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const { cart } = useContext(AppContext);
  const { Items } = cart;

  // const totalPrice = Items.reduce(
  //   (accumulator, item) => accumulator + item.price,
  //   0
  // );

  return (
    <div className="Checkout-Container">
      <div className="summary-and-info">
        <div className="home-paragraph">
          <p>Home</p>
          <span>/</span>
          <p className="check">Checkout</p>
        </div>
        <div className="summary">
          <div className="order-header-conunter">
            <h1>Order Summary</h1>
            <div className="number-cart">
              <p>{Items.length}</p>
            </div>
          </div>

          {/* CONTAINER FOR THE ADD TO CART IN CHECKOUT PAGE */}
          {Items.map((item, id) => (
            <div key={id} className="carted-image-container">
              <div className="image-and-name">
                <img
                  src={item.image}
                  alt={item.name}
                  className="carted-image"
                />

                <div className="describe">
                  <h1>{item.name}</h1>
                  <p>
                    Color: <span>Blue,Red and Black</span>
                  </p>
                  <p>
                    Size: <span>sm,md,lg and xl</span>
                  </p>
                </div>
              </div>

              <div className="price">
                <h4>{"$." + item.price}</h4>
              </div>
            </div>
          ))}
          {/*END OF CONTAINER FOR THE ADD TO CART IN CHECKOUT PAGE */}
        </div>

        <div className="info">
          <form>
            <h1>Delivery Information</h1>
            <div className="first-and-last">
              <div className="contain">
                <h1>First Name</h1>

                <div className="first-name">
                  <input type="text" placeholder="Oluwole" />
                </div>
              </div>

              <div className="contain">
                <h1>Last Name</h1>

                <div className="last-name">
                  <input type="text" name="" id="" placeholder="Mcpherson" />
                </div>
              </div>
            </div>

            <div className="contain">
              <h1>Address</h1>

              <div className="last-name address">
                <input type="text" name="" id="" placeholder="Hng" />
              </div>
            </div>

            <div className="first-and-last">
              <div className="contain">
                <h1>City/Town</h1>

                <div className="first-name">
                  <input type="text" placeholder="Lagos" />
                </div>
              </div>

              <div className="contain">
                <h1>Zip code</h1>

                <div className="last-name">
                  <input type="text" name="" id="" placeholder="210056" />
                </div>
              </div>
            </div>

            <div className="first-and-last">
              <div className="contain">
                <h1>Mobile Number</h1>

                <div className="first-name">
                  <input type="text" placeholder="+234 7083288530" />
                </div>
              </div>

              <div className="contain">
                <h1>Email Address</h1>

                <div className="last-name">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="williams@gmail.com"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="payment-info">
        <h1>Payment information</h1>

        <div className="card-details">
          <div className="radio-click">
            <h4>Pay With</h4>

            <div className="radio-button">
              <div className="two-radio-button">
                <div className="radio-button-clicker">
                  <input
                    type="radio"
                    name="option"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                  />

                  <div className="radio-check">
                    <p>Debit or Credit Card</p>
                  </div>
                </div>

                <div className="radio-button">
                  <div className="radio-button-clicker">
                    <input
                      type="radio"
                      name="option"
                      value="option2"
                      checked={selectedOption === "option2"}
                      onChange={handleOptionChange}
                    />

                    <div className="radio-check">
                      <p>Pay on delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-information">
            <h1>Card Information</h1>

            <div className="card-input">
              <p>Card Holder</p>

              <div className="last-name  inputer">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Alexander Mcpherson Grey"
                />
              </div>
            </div>

            <div className="card-input">
              <p>Card Number</p>

              <div className="last-name  inputer">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="5061 2345 6789 1234"
                />
              </div>
            </div>

            <div className="two-input">
              <div className="card-input first-input">
                <p>Expiry Date</p>

                <div className="last-name  inputer">
                  <input type="text" name="" id="" placeholder="09/2024" />
                  <SlCalender />
                </div>
              </div>

              <div className="card-input second-input">
                <p>CVV</p>
                <div className="last-name inputer cvv-input">
                  <input type="text" name="" id="" placeholder="234" />
                  <IoLockClosedOutline />
                </div>
              </div>
            </div>

            <div className="tax-shpping">
              {/* <div className="sub-total ">
                <p>Sub Total</p>
                <p>{"$." + totalPrice.toFixed(2)}</p>
              </div>
              <div className="tax">
                <p>Tax (10%)</p>
                <p>{"$." + (0.1 * totalPrice).toFixed(2)}</p>
              </div> */}
              <div className="shiping">
                <p>Shipping</p>
                <p>0</p>
              </div>
            </div>

            <div className="buybutton ">
              <h1>Buy Now</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
