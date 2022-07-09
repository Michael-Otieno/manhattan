

import "./Nav.css";
import basket from "../../imgs/basket.png";

function Nav() {
  return (
    <nav className="nav">
      <p>Manhattan chicken</p>
      <h1>Menu List</h1>
      <div className='basket'>
        <img src={basket} alt="" />
        <span>3</span>
      </div>
    </nav>
  );
}

export default Nav;