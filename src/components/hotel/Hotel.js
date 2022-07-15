import "./Hotel.css";
import Nav from "../nav/Nav";
import Search from "../search/Search";
import Filter from "../filter/Filter";
import Footer from "../footer/Footer";

function Hotel() {
  return (
    <div className="hotel">
      <Nav />
      <div className="search-filter">
        <Search />
        <Filter />
      </div>
      <p className="seat-no">
        <span>Seat No:</span>
        <input type="number" placeholder="000" />
      </p>
      {/* meals */}
      <div>
        <div className="hotel-table">
          <table className="hotel-menu-table">
            <tr className="hotel-menu-table-header">
              <th>Meals</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>

            <tr className="hotel-menu-table-data">
              <td>Chips</td>
              <td>100.00</td>
              <td>
                <button className="add">Add order</button>
              </td>
              <td>
                <button className="remove">Remove menu</button>
              </td>
            </tr>

            <tr className="hotel-menu-table-data">
              <td>Grilled Chicken(1)</td>
              <td>600.00</td>
              <td>
                <button className="add">Add order</button>
              </td>
              <td>
                <button className="remove">Remove menu</button>
              </td>
            </tr>

            <tr className="hotel-menu-table-data">
              <td>Grilled Chicken(1/2)</td>
              <td>300.00</td>
              <td>
                <button className="add">Add order</button>
              </td>
              <td>
                <button className="remove">Remove menu</button>
              </td>
            </tr>

            <tr className="hotel-menu-table-data">
              <td>Grilled Chicken(1/4)</td>
              <td>150.00</td>
              <td>
                <button className="add">Add order</button>
              </td>
              <td>
                <button className="remove">Remove menu</button>
              </td>
            </tr>
          </table>
        </div>
        <div className="add-menu-btn">
          <button>Add menu</button>
        </div>
      </div>
      {/* meals end */}
      {/* beverages */}
      <div>
        <div>
          <div className="hotel-table">
            <table className="hotel-menu-table">
              <tr className="hotel-menu-table-header">
                <th>Beverages</th>
                <th>Price</th>
                <th></th>
                <th></th>
              </tr>
              <tr className="hotel-menu-table-data">
                <td>Soda(500ml)</td>
                <td>100.00</td>
                <td>
                  <button className="add">Add order</button>
                </td>
                <td>
                  <button className="remove">Remove menu</button>
                </td>
              </tr>

              <tr className="hotel-menu-table-data">
                <td>Soda(300ml)</td>
                <td>60.00</td>
                <td>
                  <button className="add">Add order</button>
                </td>
                <td>
                  <button className="remove">Remove menu</button>
                </td>
              </tr>

              <tr className="hotel-menu-table-data">
                <td>Pepsi Soda(500ml)</td>
                <td>100.00</td>
                <td>
                  <button className="add">Add order</button>
                </td>
                <td>
                  <button className="remove">Remove menu</button>
                </td>
              </tr>

              <tr className="hotel-menu-table-data">
                <td>Pepsi Soda(500ml)</td>
                <td>150.00</td>
                <td>
                  <button className="add">Add order</button>
                </td>
                <td>
                  <button className="remove">Remove menu</button>
                </td>
              </tr>
            </table>
          </div>
          <div className="add-menu-btn">
            <button>Add menu</button>
          </div>
        </div>
      </div>
      {/* beverages end */}

      {/* desert */}
      <div className="desert">
      <div>
      <div className="hotel-table">
        <table className="hotel-menu-table">
          <tr className="hotel-menu-table-header">
            <th>Desert</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>

          <tr className="hotel-menu-table-data">
            <td>Samosa</td>
            <td>50.00</td>
            <td>
              <button className="add">Add order</button>
            </td>
            <td>
              <button className="remove">Remove menu</button>
            </td>
          </tr>

          <tr className="hotel-menu-table-data">
            <td>Sausage</td>
            <td>50.00</td>
            <td>
              <button className="add">Add order</button>
            </td>
            <td>
              <button className="remove">Remove menu</button>
            </td>
          </tr>
        </table>
      </div>
      <div className="add-menu-btn">
        <button>Add menu</button>
      </div>
      </div>
      </div>
      {/* desert end */}

      <Footer/>
    </div>
  );
}

export default Hotel;
