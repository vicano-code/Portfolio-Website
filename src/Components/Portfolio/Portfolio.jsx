import React from 'react';
import "./Portfolio.css";
import Card from 'react-bootstrap/Card';

const Portfolio = (props) => {
    return (
        <div id="Portfolio">
            <h2>Recent Projects</h2>
            <div id="project">{props.projectList.map(project => {
                return (
                    <div id="card">
                        <a href={project.url}>
                        <Card>
                            <Card.Img variant="top" src={project.picture} />
                            
                        </Card>
                        </a>
                    </div>
                );
            })}
            </div>
        </div>
    );
};

export default Portfolio;