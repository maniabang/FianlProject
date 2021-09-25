import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components"
import styles from "./Footer.module.css";
import img1 from "./../img/car1.png";
import img2 from "./../img/car2.png";
import img3 from "./../img/car3.png";
import img4 from "./../img/car4.png";
import img5 from "./../img/car5.png";
import img6 from "./../img/car6.png";

const Container = styled.div`
    width: 60%;
    overflow: hidden: // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;

const Button = styled.button`
    all: unset;
    border: 1px solid black;
    padding: 0.5em 2em;
    color: black;
    border-radius: 10px;
    &: hover {
        transition: all 0.3s ease-in-out;
        background-color: black;
        color: #fff;
    }
`;

const SliderContainer = styled.div`
    width: 100%;
    display: flex; // 이미지 가로로 나열
`;

const TOTAL_SLIDES =5;

export default function Options() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const nextSlide = () => {
        if(currentSlide >= TOTAL_SLIDES){ // 더이상 넘어갈 슬라이드 없으면 초기화
            setCurrentSlide(0);
        } else{
            setCurrentSlide(currentSlide+1);
        }
    };
    
    const prevSlide = () => {
        if (currentSlide === 0){
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide-1);
        }
    };

    useEffect (() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform =
        `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }, [currentSlide]);

    return (
        <div className={styles.footer}>
            <div className={styles.option}>
                <h1>OPTIONS</h1>
            </div>
            <Container>
                {currentSlide}
                <SliderContainer ref={slideRef}>
                    <Slide img={img1} />
                    <Slide img={img2} />
                    <Slide img={img3} />
                    <Slide img={img4} />
                    <Slide img={img5} />
                    <Slide img={img6} />
                </SliderContainer>
                <Button onClick={prevSlide}>◀</Button>
                <Button onClick={nextSlide}>▶</Button>
            </Container>
        </div>
    );
}