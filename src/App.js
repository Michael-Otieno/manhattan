import "./App.css";

import Nav from './components/nav/Nav';

import Meals from "./components/meals/Meals";
import Customer from "./components/customer/Customer";

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Routes>
        <Route path="/" element={<Meals/>} />
        <Route path="/customer" element={<Customer/>} />
      </Routes>
    </div>
  );
}

export default App;
