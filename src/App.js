import "./App.css";
import Filter from "./components/filter/Filter";

import Nav from './components/nav/Nav';
import Search from "./components/search/Search";
import Meals from "./components/meals/Meals";


function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='search-filter'>
        <Search/>
        <Filter/>
      </div>
      <Meals/>
    </div>
  );
}

export default App;
