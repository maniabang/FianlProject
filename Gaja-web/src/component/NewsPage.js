import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper"; 
import "swiper/swiper.scss";

import styles from "../css/Slider.module.css";
import img1 from "../img/newsUt.jpg"; 
import img2 from "../img/newsKakaot.jpg";
import img3 from "../img/newsGrab.jpg";

SwiperCore.use([Autoplay]);

export default function NewsPage(){
    return(
        <>
        <div className={styles.NewsPageTopDisplay}>
        <Swiper 
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}	// 추가
      >
        <SwiperSlide><img src={img1} className={styles.imgNewsPage} alt=''/></SwiperSlide>
        <SwiperSlide><img src={img2} className={styles.imgNewsPage} alt=''/></SwiperSlide>
        <SwiperSlide><img src={img3} className={styles.imgNewsPage} alt=''/></SwiperSlide>

        </Swiper>
        </div>


        </>
    )
}