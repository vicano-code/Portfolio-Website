import React from 'react'
import './Intro.css';
import Vic from '../../img/Vic_Passport.jpg';

const Intro = () => {


    return (
        <div className="introPage">
            <img src={Vic} alt="" />
            <span> Hey, I am Victor Anokwuru</span>
            <span>a web developer</span>
        </div>
    )
}

export default Intro