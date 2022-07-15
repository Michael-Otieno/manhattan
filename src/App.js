import "./App.css";

// import Nav from './components/nav/Nav';

import Meals from "./components/meals/Meals";
import Customer from "./components/customer/Customer";

import {Routes, Route} from 'react-router-dom';
import Hotel from "./components/hotel/Hotel";
import HotelSignUp from "./components/hotel-signup/HotelSignUp";
import HotelSignIn from "./components/hotel-signin/HotelSignIn";

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      
      <Routes>
        <Route path="/" element={<Meals/>} />
        <Route path="/customer" element={<Customer/>} />
        <Route path="/hotel-signup" element={<HotelSignUp/>} />
        <Route path="/sign-in" element={<HotelSignIn/>} />
        {/* <Route path="/hotel" element={<Hotel/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
