import React, { useState } from "react";
import SliderContent from "./SliderContent";
import imageSlider from "./imageSlider";
import Arrows from "./Arrows";
import './Slider.css';

// import Dots from "./Dots";


const len = imageSlider.length -1;

export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    

    return(
        
        <div className="slider-container">
            <br />

            <SliderContent activeIndex={activeIndex} imageSlider={imageSlider}
            />

            <Arrows 
                prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex -1)
                }

                nextSlide={()=>
                    setActiveIndex(activeIndex === len ? 0 :activeIndex +1)
                }
            />


            {/* <Dots 
                activeIndex={activeIndex}
                imageSlider={imageSlider}
                onclick={(activeIndex) => setActiveIndex(activeIndex)}
            /> */}
        </div>
    );
}