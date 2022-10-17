import React from 'react';
import Project from '../Project';
import '../../styles/work.css'
import kidsPic from '../../images/kids-rx.png';
import partyPic from '../../images/virtual-party.png';
import quizPic from '../../images/js-quiz.png';
import schedulePic from '../../images/work-scheduler.png';
import weatherPic from '../../images/weather.png';
import notePic from '../../images/note-taker.png';
import teamPic from '../../images/team-generator.png';
import empPic from '../../images/emp-db.png';

//TODO: add newer projects
//! previous and next buttons not working
function Work () {
    const kidsRx = {
        image: kidsPic,
        alt: 'kids rx application',
        link: "https://kids-rx-emr.herokuapp.com/",
        title: "Kids RX: Pediatric Electronic Medical Records",
        description: "A full-stack application that allows providers to keep track of patient records. Like other EMR systems, features include appointment scheduling, creating patient charts, writing medical record notes, logging vital signs, and logging vaccination records. What makes Kids RX different is that it is specifically designed for use in pediatrics and includes features that were implemented with children in mind.",
        github: "https://github.com/rpecuch",
        tech: "Created using HTML, Tailwind CSS, Bootstrap, custom CSS, JavaScript, Node.js, Express, MySQL, Sequelize, Moment.js, Font Awesome, and Google Fonts. Note: this is a private repo.",
        class: "carousel-caption d-none d-md-block text-dark custom-caption"
    }

    const party = {
        image: partyPic,
        alt: "virtual party mom application",
        link: "https://rpecuch.github.io/virtual-party/",
        title: "Virtual Party Mom",
        description: "A tool that generates activities for group gatherings based on the current weather conditions. In-app features include a joke generator, Cards Against Humanity, and Would You Rather?!",
        github: "https://github.com/rpecuch/virtual-party",
        tech: "Created using HTML, Tailwind CSS, Bootstrap, custom CSS, JavaScript, jQuery, Moment.js, Font Awesome, and Google Fonts.",
        class: "carousel-caption d-none d-md-block text-dark custom-caption"
    }

    const quiz = {
        image: quizPic,
        alt: "javascript quiz application",
        link: "https://rpecuch.github.io/javascript-quiz/",
        title: "JavaScript Coding Quiz",
        description: "An interactive timed quiz about JavaScript concepts.",
        github: "https://github.com/rpecuch/javascript-quiz",
        tech: "Created using HTML, custom CSS, and JavaScript.",
        class: "carousel-caption d-none d-md-block text-dark"
    }

    const schedule = {
        image: schedulePic,
        alt: "work day scheduler application",
        link: "https://rpecuch.github.io/work-day-scheduler/",
        title: "Work Day Scheduler",
        description: "An application to create and save events for the work day.",
        github: "https://github.com/rpecuch/work-day-scheduler",
        tech: "Created using HTML, Bootstrap, custom CSS, JavaScript, jQuery, Moment.js, Font Awesome, and Google Fonts.",
        class: "carousel-caption d-none d-md-block text-dark custom-caption"
    }

    const weather = {
        image: weatherPic,
        alt: "weather dashboard application",
        link: "https://rpecuch.github.io/weather-dashboard/",
        title: "Weather Dashboard",
        description: "An application to display the weather forecast for a city that is searched by the user",
        github: "https://github.com/rpecuch/weather-dashboard",
        tech: "Created using HTML, Bootstrap, custom CSS, JavaScript, Moment.js, Font Awesome, and Google Fonts.",
        class: "carousel-caption d-none d-md-block text-dark"
    }

    const note = {
        image: notePic,
        alt: "note taker application",
        link: "https://express-note-taker-rp.herokuapp.com/",
        title: "Note Taker",
        description: "A full-stack application to allow the user to write, save, and delete notes",
        github: "https://github.com/rpecuch/note-taker",
        tech: "Created using HTML, Bootstrap, custom CSS, JavaScript, Node.js, and Express.",
        class: "carousel-caption d-none d-md-block text-dark"
    }

    const team = {
        image: teamPic,
        alt: "team profile generator application",
        link: "https://github.com/rpecuch/team-profile-generator",
        title: "Team Profile Generator",
        description: "A command-line application to allow the user to generate an HTML document with information about a software engineering team.",
        github: "https://github.com/rpecuch/team-profile-generator",
        tech: "Created using JavaScript, Node.js, HTML, Bootstrap, and Font Awesome.",
        class: "carousel-caption d-none d-md-block text-dark"
    }

    const empDb = {
        image: empPic,
        alt: "employee database application",
        link: "https://github.com/rpecuch/employee-database",
        title: "Employee Database",
        description: "A command-line application to allow the user to view and modify an employee database.",
        github: "https://github.com/rpecuch/employee-database",
        tech: "Created using JavaScript, Node.js, and MySQL.",
        class: "carousel-caption d-none d-md-block text-dark"
    }

    return(
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators custom-ol">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
        </ol>
        <div class="carousel-inner">
          <Project image={kidsRx.image} alt={kidsRx.alt} link={kidsRx.link} title={kidsRx.title} description={kidsRx.description} github={kidsRx.github} tech={kidsRx.tech}/>
          <Project image={party.image} alt={party.alt} link={party.link} title={party.title} description={party.description} github={party.github} tech={party.tech}/>
          <Project image={quiz.image} alt={quiz.alt} link={quiz.link} title={quiz.title} description={quiz.description} github={quiz.github} tech={quiz.tech}/>
          <Project image={schedule.image} alt={schedule.alt} link={schedule.link} title={schedule.title} description={schedule.description} github={schedule.github} tech={schedule.tech}/>
          <Project image={weather.image} alt={weather.alt} link={weather.link} title={weather.title} description={weather.description} github={weather.github} tech={weather.tech}/>
          <Project image={note.image} alt={note.alt} link={note.link} title={note.title} description={note.description} github={note.github} tech={note.tech}/>
          <Project image={team.image} alt={team.alt} link={team.link} title={team.title} description={team.description} github={team.github} tech={team.tech}/>
          <Project image={empDb.image} alt={empDb.alt} link={empDb.link} title={empDb.title} description={empDb.description} github={empDb.github} tech={empDb.tech}/>
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