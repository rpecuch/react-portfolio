import React from 'react';
//TODO: upload image
function Home () {
    return(
        <div class="jumbotron jumbotron-fluid custom-jumbo">
            <div class="container text-center bg-light custom-container">
                <h1 class="display-4">Rita Pecuch</h1>
                <p class="lead">Full-Stack Web Developer</p>
                <img src="./assets/images/headshot.jpg" alt="headshot"/>
                <p id="welcome">Welcome to my portfolio.</p>
                <p>I am a full-stack developer with a biology and healthcare background.</p>
            </div>
        </div>
    )
}

export default Home;