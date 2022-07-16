import './HotelSignIn.css';
import {Link} from 'react-router-dom';

function HotelSignIn(){
  return (
    <div className='center-form'>
      <div className="sign-in">
      <form>
        <h4>Sign In</h4>
        <input type="email" placeholder="Email" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <div className="sign-in-div">
          <button className="sign-in-btn">
            <Link to='/hotel'>Sign In</Link>
          </button>
          <p className="sign-in-p">
            Not registered?
            <Link to="/hotel-signup">Sign up</Link>
          </p>
        </div>
      </form>
    </div>
    </div>
    
  )
}

export default HotelSignIn;