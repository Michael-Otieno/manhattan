import './Search.css';
import searchIcon from "../../imgs/search.png";


function Search(){
  return (
    <div className='search'>
      <input type='Search' placeholder='Search food' />
      <img src={searchIcon} alt='' />
    </div>
  )
}

export default Search;