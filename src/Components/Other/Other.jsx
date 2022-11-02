import React from 'react';
import "./Other.css"
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

SwiperCore.use([Pagination]);

const Gallery = () => {
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
        <div className='Other'>
            <h2>Pictures</h2>
            <div id="swiper">
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
    );
};

export default Gallery;