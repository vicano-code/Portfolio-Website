import React from 'react'
import './Services.css'
import Glasses from '../../img/glasses.png';
import HeartEmoji from '../../img/heartemoji.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import { motion } from 'framer-motion'

const Services = () => {

    return (
        <div className="services" id='Services'>
            {/* left side */}
            <div className="awesome">
                <span>My Awesome Services</span>
                <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <Card
                    emoji={HeartEmoji}
                    heading={'Developer'}
                    detail={"HTML, CSS, JavaScript, React.js, Bootstrap, Node(NPM), jQuery, Redux, VSCode."}
                />
                {/* second card*/}
                <Card
                    emoji={Glasses}
                    heading={'Excel VBA'}
                    detail={`Automation, professional user forms,
                     Importing information from multiple workbooks to a central workbook,
                      Consolidating information from multiple worksheets into a central worksheet,
                      Optimization problems, 
                      Pivot Tables and Charts, and more... `}
                />
                {/* third card*/}
                <Card
                    emoji={Humble}
                    heading={'Data Science'}
                    detail={"Data scraping, Data cleaning, Data analysis, Data visualization, Regression analysis, Supervised learning, Unsupervised Learning, TIme Series Analysis "}
                />
            </div>
        </div>
    )
}

export default Services