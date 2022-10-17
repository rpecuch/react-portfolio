import React from 'react';

function Project ({image, alt, link, title, description, github, tech}) {
 return(
    <div class={alt === 'kids rx application' ? "carousel-item active" : "carousel-item"}>
        <img src={image} class="d-block w-100" alt={alt}/>
        <div class="carousel-caption d-none d-md-block text-dark custom-caption">
            <a href={link} class="text-dark"><h5>{title}</h5></a>
            <p>{description}.</p>
            <a href={github} class="text-dark"><p>{tech}</p></a>
         </div>
    </div>
 )
}

export default Project;