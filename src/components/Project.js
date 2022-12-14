import React from 'react';
//import stylesheet
import '../styles/work.css';
//import font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project ({link, title, description, github, tech, bClass}) {
   //define font size styling 
   const styles = {
      text: {
         fontSize: '150%'
      },
      header: {
         fontSize: '200%'
      }
   }
//renders project component using styles and font awesome icons
 return(
   <div className={bClass} style={styles.text}>
      <a href={link}><h5 style={styles.header}>{title}</h5></a>
      <a href={github}><FontAwesomeIcon icon={faGithub} size='2xl'/></a>
      <p id="desc" className='d-none d-lg-block'>{description}</p>
      <p className='d-none d-lg-block'>{tech}</p>
   </div>
 )
}

export default Project;