import "./App.css";
import Filter from "./components/filter/Filter";

import Nav from './components/nav/Nav';
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='search-filter'>
        <Search/>
        <Filter/>
      </div>
    </div>
  );
}

export default App;
