import React from "react";
import styles from "./Footer.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "./../img/car1.png";
import img2 from "./../img/car2.png";
import img3 from "./../img/car3.png";
import img4 from "./../img/car4.png";
import img5 from "./../img/car5.png";
import img6 from "./../img/car6.png";


export default function Options() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className={styles.footer}>
            <div className={styles.option}>
                <h1>OPTIONS</h1>
            </div>
            <Slider {...settings}>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div
                    ><img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
                <div>
                    <img src={img6} />
                </div>
            </Slider>
        </div>
    );
}

