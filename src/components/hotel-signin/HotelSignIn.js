import './HotelSignIn.css';
import {Link} from 'react-router-dom';

function HotelSignIn(){
  return (
    <div className="sign-in">
      <form>
        <h4>Sign In</h4>
        <input type="email" placeholder="Email" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <div className="sign-in-btn">
          <button>Sign Up</button>
          <p>
            Not registered?
            <Link to="/hotel-signup">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default HotelSignIn;