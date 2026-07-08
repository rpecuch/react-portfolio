import React from 'react';
//import necessary component
import Project from '../Project';
//import stylesheet
import '../../styles/work.css'
// import images
import metaPic from '../../images/metagenomics_pipeline.png';

//import carousel components
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

function Bio () {
    //store project info in objects to allow passing data to project component (then display project component multiple times with different inputs --> displays different projects)
    const metagenomics = {
        id: 1,
        image: metaPic,
        alt: 'metagenomics project',
        link: "https://github.com/rpecuch/sepsis-detection-metagenomics",
        title: "Metagenomics Analysis for Sepsis Detection",
        description: "Placeholder description",
        github: "https://github.com/rpecuch/sepsis-detection-metagenomics",
        tech: "Created using R and command-line tools on Galaxy server.",
        bClass: "light-caption active"
    }

    // const party = {
    //     id: 2,
    //     image: partyPic,
    //     alt: "virtual party mom application",
    //     // TODO: fix dad joke and CAH API to one that does not require authentication
    //     link: "https://rpecuch.github.io/virtual-party/",
    //     title: "Virtual Party Mom",
    //     description: "A tool that generates activities for group gatherings based on the current weather conditions. In-app features include a joke generator, Cards Against Humanity, and Would You Rather?!",
    //     github: "https://github.com/rpecuch/virtual-party",
    //     tech: "Created using HTML, Tailwind CSS, Bootstrap, custom CSS, JavaScript, jQuery, and Moment.js.",
    //     bClass: "light-caption"
    // }

    // const quiz = {
    //     id: 3,
    //     image: quizPic,
    //     alt: "javascript quiz application",
    //     link: "https://rpecuch.github.io/javascript-quiz/",
    //     title: "JavaScript Coding Quiz",
    //     description: "An interactive timed quiz about JavaScript concepts.",
    //     github: "https://github.com/rpecuch/javascript-quiz",
    //     tech: "Created using HTML, custom CSS, and JavaScript.",
    //     bClass: "dark-caption"
    // }

    //displays Work Samples page using a carousel of project components
    return(
    <MDBCarousel showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={metagenomics.image}
        alt={metagenomics.alt}
      >
        <Project bClass={metagenomics.bClass} link={metagenomics.link} title={metagenomics.title} github={metagenomics.github} description={metagenomics.description} tech={metagenomics.tech}/>
      </MDBCarouselItem>

    </MDBCarousel>
    )
}

export default Bio;