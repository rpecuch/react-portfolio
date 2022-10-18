import React from 'react';
import '../styles/header.css';

function Navigation({ page, changePage}) {
    const styles = {
        nav: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        selected: {
            fontStyle: 'oblique'
        },
        default: {
            fontStyle: 'normal'
        }
    }

    return (
        <nav style={styles.nav}>
                <a class="navbar-brand" href="#about" onClick={() => changePage('About')} style={page === 'About' ? styles.selected : styles.default}>About</a>
                <a class="navbar-brand" href="#work" onClick={() => changePage('Work')} style={page === 'Work' ? styles.selected : styles.default}>Work Samples</a>
                <a class="navbar-brand" href="#resume" onClick={() => changePage('Resume')} style={page === 'Resume' ? styles.selected : styles.default}>Resume</a>
                <a class="navbar-brand" href="#contact" onClick={() => changePage('Contact')} style={page === 'Contact' ? styles.selected : styles.default}>Contact</a>
        </nav>
    )
}

export default Navigation;