import "./App.css";

import Nav from './components/nav/Nav';

import Meals from "./components/meals/Meals";
import Customer from "./components/customer/Customer";

import {Routes, Route} from 'react-router-dom';
import Hotel from "./components/hotel/Hotel";

function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Routes>
        <Route path="/" element={<Meals/>} />
        <Route path="/customer" element={<Customer/>} />
        <Route path="/hotel" element={<Hotel/>} />
      </Routes>
    </div>
  );
}

export default App;
