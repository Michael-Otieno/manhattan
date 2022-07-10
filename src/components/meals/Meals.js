import ImageSlider from '../imageSlider/ImageSlider.js';
import './Meals.css';

function Meals(){
  return(
    <div className='meals'>
      <p className='seat-no'>
        <span>Seat No:</span>
        <input type='number' placeholder='000'/>
      </p>
      <ImageSlider/>
    </div>
  )
}
export default Meals;