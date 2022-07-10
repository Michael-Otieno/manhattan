import "./ImageSlider.css";
import meals from "../../imgs/meals.png";
import desert from "../../imgs/desert.png";
import beverages from "../../imgs/beverages.png";
import left from "../../imgs/left.png";
import right from "../../imgs/right.png";
import { useState } from "react";

function ImageSlider() {
  const images = [meals,beverages,desert];
  const [activeImage, setActiveImage] = useState(0)
  function next(){
    if(activeImage < 2){
      setActiveImage(activeImage + 1)
      
    }else{
      setActiveImage(2)
    }
  }
  function previous(){
    if(activeImage > 0){
      setActiveImage(activeImage-1)
    }else{
      setActiveImage(0)
    }
  }

  return (
    <div className="image-slider">
      <div className="left">
        <img onClick={previous} src={right} alt='' />
      </div>
      <div className="imgs">
        <img src={images[activeImage]}  alt=''/>
      </div>
      <div className="right">
        <img onClick={next} src={left}  alt=''/>
      </div>
    </div>
  );
}

export default ImageSlider;
