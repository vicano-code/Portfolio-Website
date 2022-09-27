import React from "react";
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import {motion} from 'framer-motion'

const Works = () => {

    return(
        <div className="works">
            <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <spane>
                    Lorem ispum is simpley dummy tet of printing of Lorem 
                    <br />
                    ispum is simpley dummy text of printing
                    <br />
                    ispum is simpley dummy text of printing
                    <br />
                    ispum is simpley dummy text of printing
                </spane>
              
                <button className="button s-button" >Hire me</button>
              
                <div className="blur s-blurl" style={{background: "#ABF1FF94" }}></div>
            </div>

            {/*right side*/}
            <div className="w-right">
                <motion.div className="w-mainCircle"
                    initial={{rotate: 45}}
                    whileInView = {{rotate: 0}}
                    viewport = {{margin: '-40px'}}
                    transition = {{duration: 3.5, type:'spring'}}
                >
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/*background Circles*/}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}


export default Works;