import Footer from "../footer/Footer.js";
import ImageSlider from "../imageSlider/ImageSlider.js";
import "./Meals.css";

function Meals() {
  return (
    <div className="meals">
      <p className="seat-no">
        <span>Seat No:</span>
        <input type="number" placeholder="000" />
      </p>
      <ImageSlider />
      {/* meals */}
      <div className="meals-list">
        <div className="meals-on-list">
          <h3>Meals</h3>
          <ul>
            <li>Chips</li>
            <li>Grilled Chicken(1)</li>
            <li>Grilled Chicken(1/2)</li>
          </ul>
        </div>
        <div className="meals-price-list">
          <h3>Price</h3>
          <ul>
            <li>100.00</li>
            <li>600.00</li>
            <li>300.00</li>
          </ul>
        </div>
        <div className="meals-order-btn-list">
          <h3>Add to list</h3>
          <ul>
            <li>
              <button>Add to order</button>
            </li>
            <li>
              <button>Add to order</button>
            </li>
            <li>
              <button>Add to order</button>
            </li>
          </ul>
        </div>
      </div>
      {/* beverages */}
      <div className="beverages-list">
        <div className="beverages-on-list">
          <h3>Beverages</h3>
          <ul>
            <li>Mango or Passion juice(500ml)</li>
            <li>Mango or Passion juice(300ml)</li>
            <li>Soda(500ml)</li>
            <li>Pepsi Soda(500ml)</li>
            <li>Pepsi Soda(300ml)</li>
          </ul>
        </div>
        <div className="beverages-price-list">
          <h3>Price</h3>
          <ul>
            <li>100.00</li>
            <li>60.00</li>
            <li>100.00</li>
            <li>100.00</li>
            <li>60.00</li>
          </ul>
        </div>
        <div className="beverages-order-btn-list">
          <h3>Add to list</h3>
          <ul>
            <li>
              <button>Add to order</button>
            </li>
            <li>
              <button>Add to order</button>
            </li>
            <li>
              <button>Add to order</button>
            </li>
            <li>
              <button>Add to order</button>
            </li>
            <li>
              <button>Add to order</button>
            </li>
          </ul>
        </div>
      </div>
      {/* deserts */}
      <div className="deserts-list">
        <div className="deserts-on-list">
          <h3>Deserts</h3>
          <ul>
            <li>Samosas</li>
            <li>Sausages</li>
          </ul>
        </div>
        <div className="desert-price-list">
          <h3>Price</h3>
          <ul>
            <li>100.00</li>
            <li>60.00</li>
          </ul>
        </div>
        <div className="desert-order-btn-list">
          <h3>Add to list</h3>
          <ul>
            <li>
              <button>Add to order</button>
            </li>
            <li>
              <button>Add to order</button>
            </li>
          </ul>
        </div>
      </div>
      <Footer/>     
    </div>
  );
}
export default Meals;
