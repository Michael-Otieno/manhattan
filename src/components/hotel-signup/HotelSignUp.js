import "./HotelSignUp.css";
import { Link } from "react-router-dom";

function HotelSignUp() {
  return (
    <div className="signup">
      <div>
        <h4>Sign Up</h4>
        <input type="text" placeholder="Company Name" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <input type="password" placeholder="Confirm Password" />
        <br />
        <div className="sign-up-btn">
          <button>Sign Up</button>
          <p>
            Already registered?
            <Link to="/sign-in">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HotelSignUp;
