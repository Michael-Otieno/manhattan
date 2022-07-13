import "./Customer.css";

import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

function Customer() {
  return (
    <div className="customer">
      {/* meals */}
      <div>
        <div className="customer-meals-list">
          <div className="customer-meals-on-list">
            <h3>Meals</h3>
            <ul>
              <li>Chips</li>
              <li>Grilled Chicken(1)</li>
            </ul>
          </div>
          <div className="customer-meals-price-list">
            <h3>Price</h3>
            <ul>
              <li>100.00</li>
              <li>600.00</li>
            </ul>
          </div>
          <div className="customer-meals-order-btn-list">
            <h3>Cancel order</h3>
            <ul>
              <li>
                <button>Cancel order</button>
              </li>
              <li>
                <button>Cancel order</button>
              </li>
            </ul>
          </div>
        </div>
        {/*total order */}
        <div className="total-customer-meals-list">
          <div className="total-customer-meals-on-list">
            <ul>
              <li>Total</li>
            </ul>
          </div>
          <div className="total-customer-meals-price-list">
            <ul>
              <li>700.00</li>
            </ul>
          </div>
          <div className="total-customer-meals-order-btn-list">
            <ul>
              <li>
                <button>Cancel order</button>
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
        {/* back to menu */}
        <div className="back-menu-btn">
          <Link to="/">
            <button>Back to Menu</button>
          </Link>
        </div>
        {/* pay via */}
        <div className="payment">
          <div className="payment-details">
            <h3>Pay Via</h3>
            <ul>
              <li>Cash</li>
              <li>M-pesa</li>
              <li>Airtel</li>
              <li>Stripe</li>
            </ul>
          </div>
          <div className="payment-details">
            <ul>
              <br />
              <li>Waiter/waitress on the way.</li>
              <li>Till No. 225670</li>
              <li>Till No. 255440</li>
              <li>Scan code</li>
            </ul>
          </div>
          <div className="payment-check">
            <ul>
              <li>
                <input type='checkbox' />
              </li>
              <li>
              <input type='checkbox' />
              </li>
              <li>
              <input type='checkbox' />
              </li>
            </ul>
          </div>
        </div>
        <div className="pay-btn">
          <button>PLACE ORDER</button>
        </div>
        {/* pay via end */}
        {/* meals end */}
      </div>
      {/* meals end */}

      <div className="order-num-details">
        <ul>
          <li>Your order is number: 25</li>
          <li>Total orders in line: 23</li>
          <li>Average service time: 5 mins</li>
        </ul>
      </div>

      <Footer/>

    </div>
  );
}

export default Customer;
