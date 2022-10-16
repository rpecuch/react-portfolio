import React from 'react';
import Project from '../Project';

function Work () {
    const kidsRx = {
        image: 'kids-rx.png',
        alt: 'kids rx application',
        link: "https://kids-rx-emr.herokuapp.com/",
        title: "Kids RX: Pediatric Electronic Medical Records",
        description: "A full-stack application that allows providers to keep track of patient records. Like other EMR systems, features include appointment scheduling, creating patient charts, writing medical record notes, logging vital signs, and logging vaccination records. What makes Kids RX different is that it is specifically designed for use in pediatrics and includes features that were implemented with children in mind.",
        github: "https://github.com/rpecuch",
        tech: "Created using HTML, Tailwind CSS, Bootstrap, custom CSS, JavaScript, Node.js, Express, MySQL, Sequelize, Moment.js, Font Awesome, and Google Fonts. Note: this is a private repo."
    }

    const party = {
        image: "virtual-party.png",
        alt: "virtual party mom application",
        link: "https://rpecuch.github.io/virtual-party/",
        title: "Virtual Party Mom",
        description: "A tool that generates activities for group gatherings based on the current weather conditions. In-app features include a joke generator, Cards Against Humanity, and Would You Rather?!",
        github: "https://github.com/rpecuch/virtual-party",
        tech: "Created using HTML, Tailwind CSS, Bootstrap, custom CSS, JavaScript, jQuery, Moment.js, Font Awesome, and Google Fonts."
    }

    const quiz = {
        image: "js-quiz.png",
        alt: "javascript quiz application",
        link: "https://rpecuch.github.io/javascript-quiz/",
        title: "JavaScript Coding Quiz",
        description: "An interactive timed quiz about JavaScript concepts.",
        github: "https://github.com/rpecuch/javascript-quiz",
        tech: "Created using HTML, custom CSS, and JavaScript."
    }

    const p = {
        image:
        alt:
        link:
        title:
        description:
        github:
        tech:
    }

    return(
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="8"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="9"></li>
        </ol>
        <div class="carousel-inner">
          <Project image={kidsRx.image} alt={kidsRx.alt} link={kidsRx.link} title={kidsRx.title} description={kidsRx.description} github={kidsRx.github} tech={kidsRx.tech}/>
          <Project image={party.image} alt={party.alt} link={party.link} title={party.title} description={party.description} github={party.github} tech={party.tech}/>
          <Project image={quiz.image} alt={quiz.alt} link={quiz.link} title={quiz.title} description={quiz.description} github={quiz.github} tech={quiz.tech}/>
          <div class="carousel-item">
            <img src="./assets/images/work-scheduler.png" class="d-block w-100" alt="work day scheduler application">
            <div class="carousel-caption d-none d-md-block text-dark custom-caption">
                <a href="https://rpecuch.github.io/work-day-scheduler/" class="text-dark"><h5>Work Day Scheduler</h5></a>
              <p>An application to create and save events for the work day.</p>
              <p>Created using HTML, Bootstrap, custom CSS, JavaScript, jQuery, Moment.js, Font Awesome, and Google Fonts.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./assets/images/weather.png" class="d-block w-100" alt="weather dashboard application">
            <div class="carousel-caption d-none d-md-block text-dark">
                <a href="https://rpecuch.github.io/weather-dashboard/" class="text-dark"><h5>Weather Dashboard</h5></a>
              <p>An application to display the weather forecast for a city that is searched by the user.</p>
              <p>Created using HTML, Bootstrap, custom CSS, JavaScript, Moment.js, Font Awesome, and Google Fonts.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./assets/images/note-taker.png" class="d-block w-100" alt="note taker application">
            <div class="carousel-caption d-none d-md-block text-dark">
                <a href="https://express-note-taker-rp.herokuapp.com/" class="text-dark"><h5>Note Taker</h5></a>
              <p>A full-stack application to allow the user to write, save, and delete notes.</p>
              <p>Created using HTML, Bootstrap, custom CSS, JavaScript, Node.js, and Express.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./assets/images/team-generator.png" class="d-block w-100" alt="team profile generator application">
            <div class="carousel-caption d-none d-md-block text-dark">
                <a href="https://github.com/rpecuch/team-profile-generator" class="text-dark"><h5>Team Profile Generator</h5></a>
              <p>A command-line application to allow the user to generate an HTML document with information about a software engineering team.</p>
              <p>Created using JavaScript, Node.js, HTML, Bootstrap, and Font Awesome.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./assets/images/emp-db.png" class="d-block w-100" alt="employee database application">
            <div class="carousel-caption d-none d-md-block text-dark">
                <a href="https://github.com/rpecuch/employee-database" class="text-dark"><h5>Employee Database</h5></a>
              <p>A command-line application to allow the user to view and modify an employee database.</p>
              <p>Created using JavaScript, Node.js, and MySQL.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./assets/images/password.png" class="d-block w-100" alt="password generator application">
            <div class="carousel-caption d-none d-md-block text-dark">
                <a href="https://rpecuch.github.io/password-generator/" class="text-dark"><h5>Password Generator</h5></a>
              <p>An application that generates a password suggestion based on user-selected criteria.</p>
              <p>Created using HTML, custom CSS, and JavaScript.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./assets/images/prework-study-guide.png" class="d-block w-100" alt="password generator application">
            <div class="carousel-caption d-none d-md-block text-dark custom-caption">
                <a href="https://rpecuch.github.io/prework-study-guide/" class="text-dark"><h5>Prework Study Guide</h5></a>
              <p>A platform with information and resources for students in the prework phase of a coding bootcamp.</p>
              <p>Created using HTML, custom CSS, and JavaScript.</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon custom-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon custom-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    )
}

export default Work;