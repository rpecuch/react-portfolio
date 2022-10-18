import React from 'react';
import {
   MDBCarouselItem,
 } from 'mdb-react-ui-kit';
import '../styles/work.css';

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
      <p>{description}</p>
      <a href={github}><p>{tech}</p></a>
   </div>
  </MDBCarouselItem>
 )
}

export default Project;