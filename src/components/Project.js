import React from 'react';
import {
   MDBCarouselItem,
 } from 'mdb-react-ui-kit';
import '../styles/work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project ({id, image, alt, link, title, description, github, tech, bClass}) {
 return(
    <MDBCarouselItem
    className='w-100 d-block'
    itemId={id}
    src={image}
    alt={alt}
  >
   <div class={bClass}>
      <a href={link}><h5>{title}</h5></a>
      <a href={github}><FontAwesomeIcon icon={faGithub}/></a>
      <p id="desc">{description}</p>
      <p>{tech}</p>
   </div>
  </MDBCarouselItem>
 )
}

export default Project;