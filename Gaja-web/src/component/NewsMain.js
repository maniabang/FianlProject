import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper.scss";

import styles from "../css/Slider.module.css";
import img1 from "../img/newsUt.jpg";
import img2 from "../img/newsKakaot.jpg";
import img3 from "../img/newsGrab.jpg";

SwiperCore.use([Autoplay]);

export default function NewsMain({ flag }) {
  console.log(flag);
  return (
    <div className={flag ? styles.test : ""}>
      <div className={styles.NewsMain}>
        <div className={styles.leftNews}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 5000 }} // 추가
          >
            <SwiperSlide>
              &nbsp;티맵택시→'UT'로 재단장…택시 중개 서비스 개시
            </SwiperSlide>
            <SwiperSlide>
              &nbsp;카카오모빌리티 "이제 전국에서 카카오 T 퀵서비스 만나보세요~"
            </SwiperSlide>
            <SwiperSlide>
              &nbsp;차량공유업체 그랩(Grab)이 올해 4분기 스팩합병 방식으로 나스닥에 상장할 예정이다.
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.banner}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 5000 }} // 추가
          >
            <SwiperSlide>
              <img src={img1} className={styles.img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} className={styles.img} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} className={styles.img} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className={styles.NewsList}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 5000 }} // 추가
          >
            <SwiperSlide>
              <div>
                <ul className={styles.NewsListsub}>
                  <li>
                  &nbsp;SK텔레콤의 모빌리티 자회사 티맵모빌리티와 글로벌 모빌리티
                    <br />
                    기업 우버의 합작회사 '우티(UT)'는
                    30일 플랫폼 택시 중개 서비스를 시작한다고 밝혔다.
                  </li>
                  <br />
                  <br />
                  <li>
                    UT 앱은 티맵 택시와 동일한 방법으로 이용할 수 있다
                    <br />
                    우버의 가맹택시 서비스 '우버 택시'는 우티와 별개로 우버 앱에서 그대로 운영된다. 
                  </li>
                  <br />
                  <br />
                  <li>
                    톰 화이트 우티 최고경영자(CEO)는
                    "UT(우티)는 '우리들의 택시'라는 의미를 담고 있는 만큼
                    <br />
                    다양화된 서비스로 재편되고 있다"고 전했다.
                  </li>
                  <br />
                  <br />
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <ul className={styles.NewsListsub}>
                <li>
                  &nbsp;카카오모빌리티는 '카카오 T 퀵' 서비스 지역을 전국으로 확대한다고 15일 밝혔다.
                  <br />
                  카카오모빌리티가 지난달 30일 선보인 '카카오 T 퀵'은 플랫폼을 기반으로 소화물 이동을 돕는 서비스다. 
                </li>
                <br />
                <br />
                <li>
                앞으로 카카오 T 퀵을 통해 개인 고객들도 별도의 가입절차나 앱 설치 없이 기존에 쓰던
                  <br />
                  '카카오 T' 앱에서 손쉽게 퀵서비스를 이용할 수 있게 됐다. 
                </li>
                <br />
                <br />
                <li>
                  한편, 서비스 이용 요금은 복합적으로 반영한 탄력 요금으로 책정된다. 
                  날씨 등을 복합적으로 반영한 탄력 요금으로 책정된다. 
                  <br />
                  결제 전에 앱에서 정확한 요금을 미리 확인할 수 있다. 
                </li>
                <br />
                <br />
              </ul>
            </SwiperSlide>
            <SwiperSlide>
              <ul className={styles.NewsListsub}>
                <li> 
                  &nbsp;동남아 '우버', 2년새 기업가치 2.5배 상승…국내외 기업 투자 '잭팟'
                  <br />
                  상장에 성공하면 미국 증시 역사상 역대 최대 규모 스팩합병 신기록을 세우게 된다.
                </li>
                <br />
                <br />
                <li>
                  사업 영역도 점차 넓혀가고 있는 중이다. 
                  <br />
                  2021년 현재 식품 및 식료품 배달, 디지털 결제 등으로 사업을 확장한 상태다.
                </li>
                <br />
                <br />
                <li>
                동남아 지역만 놓고 보면 그랩은 이미 우버를 뛰어넘었다.
                2018년 우버의 동남아 사업을 인수하며 시장 경쟁에서 승리했다.
                </li>
                <br />
                <br />
              </ul>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
