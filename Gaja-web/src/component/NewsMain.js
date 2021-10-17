import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper"; 
import "swiper/swiper.scss";

import styles from "../css/Slider.module.css";
import img1 from "../img/news_1.jpg";
import img2 from "../img/news_2.jpg";
import img3 from "../img/news_3.jpg";

SwiperCore.use([Autoplay]);

export default function NewsMain({flag}){
  console.log(flag)
    return(
        <div className={flag ? styles.test : ''}>
        <div>
          <h1 className={styles.h1}>News
          {/* <a href="./NewsPage.js" className={styles.checkMore}>News List</a> */}
          <Link to={"/NewsPage"} className={styles.checkMore}>News List
          </Link>
          </h1>
        </div>
     
      <div className={styles.NewsMain}>
        <div className={styles.leftNews}>
        <Swiper 
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}	// 추가
      >
        <SwiperSlide>DiDi and GAC Group Partner Up to Accelerate
              <br /> Development and Mass Production of Fully Self-driving EVs</SwiperSlide>
        <SwiperSlide>DiDi Autonomous Driving Teams up with Volvo Cars for Self-driving Test Fleet</SwiperSlide>
        <SwiperSlide>DiDi Autonomous Driving Teams up with Volvo </SwiperSlide>

        </Swiper>
        </div>

        <div className={styles.banner}>
         <Swiper 
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}	// 추가
      >
        <SwiperSlide><img src={img1} className={styles.img} alt=''/></SwiperSlide>
        <SwiperSlide><img src={img2} className={styles.img} alt=''/></SwiperSlide>
        <SwiperSlide><img src={img3} className={styles.img} alt=''/></SwiperSlide>
      </Swiper>
      </div>


      <div className={styles.NewsList}>
      <Swiper 
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}	// 추가
      >
        <SwiperSlide>
          <div>
            <ul className={styles.NewsListsub}>
              <li>
                Didi Chuxing Expands to Cape Town, South Africa
                <br />
                2021 / 04 / 01 <Link to={"/NewsLearnMore"} className={styles.LeanMore}>Learn More</Link>
              </li>
              <br />
              <br />
              <li>
                DiDi Elevates its Diversity Program as Company Expands
                International Footprints
                <br />
                2021 / 04 / 01 <Link to={"/NewsLearnMore"} className={styles.LeanMore}>Learn More</Link>
              </li>
              <br />
              <br/>
              <li>
                DiDi Autonomous Driving Teams up with Volvo Cars for
                Self-driving Test Fleet
                <br />
                2021 / 04 / 19 <Link to={"/NewsLearnMore"} className={styles.LeanMore}>Learn More</Link>
              </li>
              <br />
              <br/>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            2
        </SwiperSlide>
        <SwiperSlide>
            <ul className={styles.NewsListsub}>
              <li>
                Didi Chuxing Expands to Cape Town, South Africa
                <br />
                2021 / 04 / 01 <Link to={"/NewsLearnMore"} className={styles.LeanMore}>Learn More</Link>
              </li>
              <br />
              <br />
              <li>
                DiDi Elevates its Diversity Program as Company Expands
                International Footprints
                <br />
                2021 / 04 / 01 <Link to={"/NewsLearnMore"} className={styles.LeanMore}>Learn More</Link>
              </li>
              <br />
              <br/>
              <li>
                DiDi Autonomous Driving Teams up with Volvo Cars for
                Self-driving Test Fleet
                <br />
                2021 / 04 / 19 <Link to={"/NewsLearnMore"} className={styles.LeanMore}>Learn More</Link>
              </li>
              <br />
              <br/>
            </ul>
          </SwiperSlide>
        </Swiper>
        </div>
        </div>
        </div>
    )
    
}