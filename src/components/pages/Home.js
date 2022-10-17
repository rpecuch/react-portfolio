import React from 'react';
import '../../styles/home.css'
import Headshot from '../../images/headshot.jpg'
//TODO: fix fonts
function Home () {
    return(
        <div class="jumbotron jumbotron-fluid custom-jumbo">
            <div class="container text-center bg-light custom-container">
                <h1 class="display-4">Rita Pecuch</h1>
                <p class="lead">Full-Stack Web Developer</p>
                <img src={Headshot} alt="headshot"></img>
                <p id="welcome">Welcome to my portfolio.</p>
                <p>I am a full-stack developer with a biology and healthcare background.</p>
            </div>
        </div>
    )
}

export default Home;