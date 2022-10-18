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
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

//TODO: add newer projects
function Work () {
    const kidsRx = {
        id: 1,
        image: kidsPic,
        alt: 'kids rx application',
        link: "https://kids-rx-emr.herokuapp.com/",
        title: "Kids RX: Pediatric Electronic Medical Records",
        description: "A full-stack application that allows providers to keep track of patient records. Like other EMR systems, features include appointment scheduling, creating patient charts, writing medical record notes, logging vital signs, and logging vaccination records. What makes Kids RX different is that it is specifically designed for use in pediatrics and includes features that were implemented with children in mind.",
        github: "https://github.com/rpecuch",
        tech: "Created using HTML, Tailwind CSS, Bootstrap, custom CSS, JavaScript, Node.js, Express, MySQL, Sequelize, and Moment.js. Note: this is a private repo.",
        bClass: "light-caption active"
    }

    const party = {
        id: 2,
        image: partyPic,
        alt: "virtual party mom application",
        link: "https://rpecuch.github.io/virtual-party/",
        title: "Virtual Party Mom",
        description: "A tool that generates activities for group gatherings based on the current weather conditions. In-app features include a joke generator, Cards Against Humanity, and Would You Rather?!",
        github: "https://github.com/rpecuch/virtual-party",
        tech: "Created using HTML, Tailwind CSS, Bootstrap, custom CSS, JavaScript, jQuery, and Moment.js.",
        bClass: "light-caption"
    }

    const quiz = {
        id: 3,
        image: quizPic,
        alt: "javascript quiz application",
        link: "https://rpecuch.github.io/javascript-quiz/",
        title: "JavaScript Coding Quiz",
        description: "An interactive timed quiz about JavaScript concepts.",
        github: "https://github.com/rpecuch/javascript-quiz",
        tech: "Created using HTML, custom CSS, and JavaScript.",
        bClass: "light-caption"
    }

    const schedule = {
        id: 4,
        image: schedulePic,
        alt: "work day scheduler application",
        link: "https://rpecuch.github.io/work-day-scheduler/",
        title: "Work Day Scheduler",
        description: "An application to create and save events for the work day.",
        github: "https://github.com/rpecuch/work-day-scheduler",
        tech: "Created using HTML, Bootstrap, custom CSS, JavaScript, jQuery, and Moment.js.",
        bClass: "light-caption"
    }

    const weather = {
        id: 5,
        image: weatherPic,
        alt: "weather dashboard application",
        link: "https://rpecuch.github.io/weather-dashboard/",
        title: "Weather Dashboard",
        description: "An application to display the weather forecast for a city that is searched by the user",
        github: "https://github.com/rpecuch/weather-dashboard",
        tech: "Created using HTML, Bootstrap, custom CSS, JavaScript, and Moment.js.",
        bClass: "light-caption"
    }

    const note = {
        id: 6,
        image: notePic,
        alt: "note taker application",
        link: "https://express-note-taker-rp.herokuapp.com/",
        title: "Note Taker",
        description: "A full-stack application to allow the user to write, save, and delete notes",
        github: "https://github.com/rpecuch/note-taker",
        tech: "Created using HTML, Bootstrap, custom CSS, JavaScript, Node.js, and Express.",
        bClass: "light-caption"
    }

    const team = {
        id: 7,
        image: teamPic,
        alt: "team profile generator application",
        link: "https://github.com/rpecuch/team-profile-generator",
        title: "Team Profile Generator",
        description: "A command-line application to allow the user to generate an HTML document with information about a software engineering team.",
        github: "https://github.com/rpecuch/team-profile-generator",
        tech: "Created using JavaScript, Node.js, HTML, and Bootstrap.",
        bClass: "dark-caption"
    }

    const empDb = {
        id: 8,
        image: empPic,
        alt: "employee database application",
        link: "https://github.com/rpecuch/employee-database",
        title: "Employee Database",
        description: "A command-line application to allow the user to view and modify an employee database.",
        github: "https://github.com/rpecuch/employee-database",
        tech: "Created using JavaScript, Node.js, and MySQL.",
        bClass: "dark-caption"
    }

    return(
    <MDBCarousel showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={kidsRx.image}
        alt={kidsRx.alt}
      >
        <Project bClass={kidsRx.bClass} link={kidsRx.link} title={kidsRx.title} github={kidsRx.github} description={kidsRx.description} tech={kidsRx.tech}/>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={party.image}
        alt={party.alt}
      >
        <Project link={party.link} title={party.title} description={party.description} github={party.github} tech={party.tech} bClass={party.bClass}/>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={quiz.image}
        alt={quiz.alt}
      >
        <Project link={quiz.link} title={quiz.title} description={quiz.description} github={quiz.github} tech={quiz.tech} bClass={quiz.bClass}/>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={schedule.image}
        alt={schedule.alt}
      >
        <Project link={schedule.link} title={schedule.title} description={schedule.description} github={schedule.github} tech={schedule.tech} bClass={schedule.bClass}/>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src={weather.image}
        alt={weather.alt}
      >
        <Project link={weather.link} title={weather.title} description={weather.description} github={weather.github} tech={weather.tech} bClass={weather.bClass}/>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={6}
        src={note.image}
        alt={note.alt}
      >
        <Project link={note.link} title={note.title} description={note.description} github={note.github} tech={note.tech} bClass={note.bClass}/>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={7}
        src={team.image}
        alt={team.alt}
      >
        <Project link={team.link} title={team.title} description={team.description} github={team.github} tech={team.tech} bClass={team.bClass}/>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={8}
        src={empDb.image}
        alt={empDb.alt}
      >
        <Project link={empDb.link} title={empDb.title} description={empDb.description} github={empDb.github} tech={empDb.tech} bClass={empDb.bClass}/>
      </MDBCarouselItem>
    </MDBCarousel>
    //   <MDBCarousel showIndicators dark fade>
    //   <Project image={kidsRx.image} alt={kidsRx.alt} link={kidsRx.link} title={kidsRx.title} description={kidsRx.description} github={kidsRx.github} tech={kidsRx.tech} bClass={kidsRx.bClass}/>
    //   <Project link={party.link} title={party.title} description={party.description} github={party.github} tech={party.tech} bClass={party.bClass}/>
    //   <Project link={quiz.link} title={quiz.title} description={quiz.description} github={quiz.github} tech={quiz.tech} bClass={quiz.bClass}/>
    //   <Project link={schedule.link} title={schedule.title} description={schedule.description} github={schedule.github} tech={schedule.tech} bClass={schedule.bClass}/>
    //   <Project link={weather.link} title={weather.title} description={weather.description} github={weather.github} tech={weather.tech} bClass={weather.bClass}/>
    //   <Project link={note.link} title={note.title} description={note.description} github={note.github} tech={note.tech} bClass={note.bClass}/>
    //   <Project link={team.link} title={team.title} description={team.description} github={team.github} tech={team.tech} bClass={team.bClass}/>
    //   <Project link={empDb.link} title={empDb.title} description={empDb.description} github={empDb.github} tech={empDb.tech} bClass={empDb.bClass}/>
    // </MDBCarousel>
    )
}

export default Work;