import "../CSS/footer.css";
import footer from "../images/Footer.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="image-container">
      <img src={footer} alt="Background Image" className="background-image" />

      <div className="image-text">
        <div className="first">
          <h1>Nature's Bounty</h1>
          <p>
            More sustainable lifestyles while
            <br />
            safeguarding the planet for
            <br />
            future generations.
          </p>
        </div>

        <div className="links">
          <h1>Links</h1>

          <p>Home</p>
          <p>About-us</p>
          <p>Contact us</p>
          <p className="last-product"> Products</p>
        </div>

        <div className="social-media-links">
          <div className="link">
            <FaLinkedinIn />
          </div>
          <div className="link">
            <FaFacebookF />
          </div>
          <div className="link">
            <FaInstagram />
          </div>
          <div className="link">
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
