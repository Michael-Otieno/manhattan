
import "./Nav.css";
import basket from "../../imgs/basket.png";

import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <p>Manhattan chicken</p>
      <h1>Menu List</h1>
      <div className='basket'>
         <Link to="/customer">
          <img src={basket} alt="" />
        </Link>
        <span>3</span>
        <Link to="/hotel-signup">
        <button className='staff'>Staff</button>
        </Link>
        
      </div>
    </nav>
  );
}

export default Nav;