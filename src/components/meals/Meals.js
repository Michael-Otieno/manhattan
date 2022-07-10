import './Meals.css';

function Meals(){
  return(
    <div className='meals'>
      <p className='seat-no'>
        <span>Seat No:</span>
        <input type='number' placeholder='000'/>
      </p>
    </div>
  )
}
export default Meals;