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
                <p id="bio">I am a full-stack developer that completed the full-time bootcamp at Rutgers University! I come from an extensive background of biology and healthcare. I graduated from Oakland University with a B.S. in Biomedical Science in May 2021, and worked in clinical medicine for four years. I am interested in creating applications for use in healthcare or STEM! I am very knowledgeable in both the healthcare and biological research industries.</p>
                <p style={{fontSize: '150%'}}>Key Skills: JavaScript, Python, C#, MySQL, NoSQL</p>
            </div>
        </div>
    )
}

export default About;