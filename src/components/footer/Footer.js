import "./Footer.css";
import restaurantOne from "../../imgs/rest.jpg";
import restaurantTwo from "../../imgs/rest1.jpg";
import restaurantThree from "../../imgs/rest2.jpg";
import instagram from "../../imgs/ig.png";
import facebook from "../../imgs/facebook.png";
import tiktok from "../../imgs/tiktok.png";

import twitter from "../../imgs/twitter.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-imgs">
        <img src={restaurantOne} alt="" />
        <img src={restaurantTwo} alt="" />
        <img src={restaurantThree} alt="" />
      </div>
      <div className="footer-details">
        <div className="footer-logo">
          <p>Manhattan chicken</p>
        </div>
        <div className="footer-branches">
          <h4>Our branches</h4>
          <ul>
            <li> - Eastleigh</li>
            <li> - Kiamaiko</li>
            <li> - Bama</li>
            <li> - Tom Mboya</li>
          </ul>
        </div>
        <div className="footer-online">
          <h4>Follow us online</h4>
          <ul>
            <li>
              <img src={facebook} alt="" /><span> - Facebook</span>
            </li>
            <li>
              <img src={instagram} alt="" /><span> - Instagram</span>
            </li>
            <li>
              <img src={tiktok} alt="" /><span>- TikTok</span>
            </li>
            <li>
              <img src={twitter} alt="" /><span>- Twitter</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
