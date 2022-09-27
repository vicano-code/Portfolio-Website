import React from 'react'
import './Intro.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import at_Svalbard1 from '../../img/at_Svalbard1.jpg';
import at_Svalbard2 from '../../img/at_Svalbard2.jpg';
import at_Svalbard3 from '../../img/at_Svalbard3.jpg';
import conference from '../../img/conference.jpg';
import uis_Grad1 from '../../img/uis_Grad1.jpg';
import uis_Grad2 from '../../img/uis_Grad2.jpg';
import uis_coursemates from '../../img/uis_coursemates.jpg';
import cbgs_work_review from '../../img/cbgs_work_review.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Resume from './Resume_Victor_Anokwuru.docx'

SwiperCore.use([Pagination]);

const Intro = () => {
    const myPics = [

        {
            img: at_Svalbard1,
            review: ""
        },
        {
            img: at_Svalbard2,
            review: ""
        },
        {
            img: at_Svalbard3,
            review: ""
        },
        {
            img: conference,
            review: ""
        },
        {
            img: uis_Grad1,
            review: ""
        },
        {
            img: uis_Grad2,
            review: ""
        },
        {
            img: uis_coursemates,
            review: ""
        },
        {
            img: cbgs_work_review,
            review: ""
        }
    ]

    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I am</span>
                    <span>Victor Anokwuru</span>
                    <span>Frontend Developer with intermediate experience in web development, focused on producing quality work. </span>
                    <span>I hold a BSc in Petroleum Engineering from the Federal University of Technology Owerri in Nigeria and an MSc in Petroleum Engineering from the University of Stavanger in Norway. </span>
                    <span>My first experience in programming was during my master program. We were taught practically on how to write models with matlab to simulate drill cuttings removal during oil well drilling. I also learnt how to do complex computations on Excel from our Geostatistics course. Since then I have developed strong interest in programming. </span>
                    <span>I learnt HTMl/CSS, JavaScript, React, D3, Python, SQL, Data Science and Excel VBA through courses on coursera, freecodecamp, w3schools, codecademy, youtube and more. I am currently working hard to improve my skills and expand my tech stack.</span>
                    <span>Presently, I work for CB Geophysical Solutions as a seismic data processing geophysicist and I hope to transition into a full time developer some day.</span>
                </div>
                <a href={Resume} download>
                    <button className="button i-button" >Download CV</button>
                </a>
            </div>
            <div className="i-right">
                {/* slider */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                    effect={"coverflow"}
                    autoplay={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    pagination={{clickable: true}}
                >
                    {myPics.map((pic, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="pictures">
                                    <img src={pic.img} alt="" />
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                {/*blur divs*/}


            </div>

        </div>
    )
}

export default Intro