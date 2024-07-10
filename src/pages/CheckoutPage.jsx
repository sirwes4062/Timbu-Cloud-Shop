import "../CSS/checkout.css";
import { SlCalender } from "react-icons/sl";
import { IoLockClosedOutline } from "react-icons/io5";
import { useContext } from "react";
import { AppContext } from "../components/AppProvider";

const CheckoutPage = () => {
  const { cartArray } = useContext(AppContext);
  // setCartArray

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
              <p>3</p>
            </div>
          </div>

          {/* CONTAINER FOR THE ADD TO CART IN CHECKOUT PAGE */}

          {cartArray.map((item, id) => (
            <div key={id} className="carted-image-container">
              <div className="image-and-name">
                <img
                  src={item.image}
                  alt={item.name}
                  className="carted-image"
                />

                <div className="describe">
                  <h1>{item.name}</h1>
                  <h1>Color:Blue,Red and Black</h1>
                </div>
              </div>

              <div className="price">
                <h4>$244</h4>
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
              {/* first radio button */}
              <div className="radio-button-click button1">
                <div className="inner-green"></div>
              </div>
              {/* end of first radio button */}
              <div className="radio-check">
                <p>Debit or Credit Cardy</p>
              </div>
            </div>
            <div className="radio-button">
              {/* second radio button */}
              <div className="radio-button-click button2"></div>
              {/* end of second radio button */}

              <div className="radio-check">
                <p>Pay on delivery</p>
              </div>
            </div>
          </div>

          <div className="card-information">
            <h1>Card Information</h1>
            {/* ///////input for card details */}

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

                <div className="last-name  inputer">
                  <input type="text" name="" id="" placeholder="234" />
                  <IoLockClosedOutline />
                </div>
              </div>
            </div>

            <div className="tax-shpping">
              <div className="sub-total ">
                <p>Sub Total</p>

                <h2>$2115.00</h2>
              </div>
              <div className="tax">
                <p>Tax (10%)</p>

                <h2>$64.00</h2>
              </div>
              <div className="shiping">
                <p>Shipping</p>
                <h2>0</h2>
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
