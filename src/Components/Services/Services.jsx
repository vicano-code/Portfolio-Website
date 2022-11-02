import React from 'react'
import './Services.css'
import WebDesign from '../../img/web-design.png';
import DataScience from '../../img/data-science.jpg';
import Excelvba from '../../img/excel.webp';

const Services = () => {

    return (
        <div className="ServicePage">
            <h2>What I can Offer</h2>
            <div id='Services'>
                <div className='Services'>
                    <img src={WebDesign} alt="" />
                    <ul>
                        <li>Figma, Material Design</li>
                        <li>HTML5, CSS3, JavaScript </li>
                        <li>Bootstrap, jQuery</li>
                        <li>React.js, Redux</li>
                        <li>Responsive development</li>
                    </ul>
                </div>
                <div className='Services'>
                    <img src={DataScience} alt="" />
                    <ul>
                        <li>Data scraping and cleaning</li>
                        <li>Data analysis and visualization </li>
                        <li>Supervised and Unsupervised Learning</li>
                        <li>Time Series Analysis</li>
                    </ul>
                </div>
                <div className='Services'>
                    <img src={Excelvba} alt="" />
                    <ul>
                        <li>Import/Export arrays from/to Excel using VBA code</li>
                        <li>Write data to .txt files and import information from .txt files</li>
                        <li>automate the import, modification, and consolidation of information from multiple worksheets/workbooks</li>
                        <li>creating professional user forms to interface with the user</li>
                        <li>perform advanced calculations, and manipulate data on the spreadsheet.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services