import React from 'react';
//import stylesheet
import '../../styles/about.css'
//import headshot image
import Headshot from '../../images/headshot.jpg';

function About() {
    //renders About Me page using styling and imported image
    return(
        <div className="jumbotron jumbotron-fluid cust-jumbo">
            <div className="container text-center bg-light custom-container">
                <h2 className="display-4">About</h2>
                <img src={Headshot} alt="headshot"></img>
                <p id="bio">I am a data science and engineering leader with expertise in clinical trial operations and systems, web development, and bioinformatics. I enjoy building scalable, open-source, and AI-driven solutions that simplify complex scientific and clinical workflows. My work focuses on developing practical technologies that accelerate clinical development and support informed decision-making while maintaining high standards for regulatory compliance and patient safety. While many of my most impactful projects are proprietary and cannot be shared publicly, this portfolio highlights the breadth of my technical skills across software engineering, data science, bioinformatics, and modern web technologies.</p>
                {/* <p style={{fontSize: '150%'}}>Key Skills: JavaScript, Python, C#, MySQL, NoSQL</p> */}
            </div>
        </div>
    )
}

export default About;