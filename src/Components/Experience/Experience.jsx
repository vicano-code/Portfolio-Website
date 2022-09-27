import React from "react"
import './Experience.css'

const Experience = () => {
    return (
        <div className="experience" id="Experience">
            <div id="ExperienceTitle">Developer Experience</div>
            <div id="achievement">
                <div className="achievement">
                    <div className="circle">1+</div>
                    <span>years</span>
                    <span>Experience</span>
                </div>
                <div className="achievement">
                    <div className="circle">5+</div>
                    <span>completed</span>
                    <span>projects</span>
                </div>
                <div className="achievement">
                    <div className="circle">1+</div>
                    <span>companies</span>
                    <span>work</span>
                </div>
            </div>
        </div>
    )
}

export default Experience