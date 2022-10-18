import React from 'react';

function Navigation({ page, changePage}) {
    //define custom styles
    const styles = {
        nav: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        selected: {
            color: '#1D3557',
            fontSize: '200%'
        },
        default: {
            color: 'white',
            fontSize: '200%'
        }
    }
    //renders navbar using custom styles
    //changes value of the page state variable when a nav link is clicked
    //ternary operator changes styling of a nav link if it corresponds with value of page state variable
    return (
        <nav style={styles.nav}>
                <a className="navbar-brand" href="#about" onClick={() => changePage('About')} style={page === 'About' ? styles.selected : styles.default}>About</a>
                <a className="navbar-brand" href="#work" onClick={() => changePage('Work')} style={page === 'Work' ? styles.selected : styles.default}>Work Samples</a>
                <a className="navbar-brand" href="#resume" onClick={() => changePage('Resume')} style={page === 'Resume' ? styles.selected : styles.default}>Resume</a>
                <a className="navbar-brand" href="#contact" onClick={() => changePage('Contact')} style={page === 'Contact' ? styles.selected : styles.default}>Contact</a>
        </nav>
    )
}

export default Navigation;