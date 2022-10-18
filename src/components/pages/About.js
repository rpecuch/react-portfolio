import React from 'react';
import '../../styles/about.css'
import Headshot from '../../images/headshot.jpg';

function About() {
    return(
        <div class="jumbotron jumbotron-fluid cust-jumbo">
            <div class="container text-center bg-light custom-container">
                <h2 class="display-4">About</h2>
                <img src={Headshot} alt="headshot"></img>
                <p id="bio">I am a full-stack developer currently enrolled in the full-time bootcamp at Rutgers University! I come from an extensive background of biology and healthcare. I graduated from Oakland University with a B.S. in Biomedical Science in May 2021, and worked in clinical medicine for four years. I am interested in creating applications for use in healthcare or STEM! I am very knowledgeable in both the healthcare and biological research industries.</p>
            </div>
        </div>
    )
}

export default About;