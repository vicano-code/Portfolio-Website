import React from 'react';
import "./Portfolio.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import WebStore from "../../img/webshop.PNG";
import myPortfolio from "../../img/myPortfolio.PNG";
import CountdownTimer from "../../img/CountdownTimer.PNG";
import JavaScriptCalculator from "../../img/JavaScriptCalculator.PNG";
import DrumMachine from "../../img/DrumMachine.PNG";
import RandomQuoteMachine from "../../img/RandomQuoteMachine.PNG";

SwiperCore.use([Pagination]);

const Portfolio = () => {
    return (
        <div className="portfolio" id="Portfolio">
            {/* heading */}
            <span>Recent Projects</span>

            {/* slider */}
            <Swiper
                modules={[Autoplay, Pagination]}
                effect={"coverflow"}
                autoplay={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                grabCursor={true}
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                <SwiperSlide>

                    <a href="https://vic-webstore.netlify.app/" target="_blank" ><img src={WebStore} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={myPortfolio} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://vic-countdown-timer.netlify.app/" target="_blank" ><img src={CountdownTimer} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://codepen.io/vicano/full/ZExreGd" target="_blank" ><img src={JavaScriptCalculator} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://vic-drum-machine.netlify.app/" target="_blank" ><img src={DrumMachine} alt="" /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://codepen.io/vicano/full/dydmyeq" target="_blank" ><img src={RandomQuoteMachine} alt="" /></a>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;