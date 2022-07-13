import "./App.css";
import Filter from "./components/filter/Filter";

import Nav from './components/nav/Nav';
import Search from "./components/search/Search";
import Meals from "./components/meals/Meals";
import Customer from "./components/customer/Customer";

import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='search-filter'>
        <Search/>
        <Filter/>
      </div>
      <Routes>
        <Route path="/" element={<Meals/>} />
        <Route path="/customer" element={<Customer/>} />
      </Routes>
    </div>
  );
}

export default App;
