import React from 'react';

function Navigation({ page, changePage}) {
    return (
        <nav class="navbar navbar-light">
                <a class="navbar-brand" href="#home" onClick={() => changePage('Home')}>Home</a>
                <a class="navbar-brand" href="#about" onClick={() => changePage('About')}>About</a>
                <a class="navbar-brand" href="#work" onClick={() => changePage('Work')}>Work Samples</a>
                <a class="navbar-brand" href="#resume" onClick={() => changePage('Resume')}>Resume</a>
                <a class="navbar-brand" href="#contact" onClick={() => changePage('Contact')}>Contact</a>
            </nav>
    )
}

export default Navigation;