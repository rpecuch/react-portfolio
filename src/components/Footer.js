import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

//TODO: make everything larger, responsive UI
function Footer () {
    const styles = {
        footer: {
            background: '#d1d1e0',
            display: 'flex',
            flexDirection: 'column',
            padding: '2%'
        },
        ul: {
            display: 'flex',
            justifyContent: 'space-evenly'
        },
        li: {
            listStyleType: 'none',
            color: 'black'
        }

    }

    return(
        <footer style={styles.footer}>
            <p class="text-center">Thank you for visiting!</p>
            <ul style={styles.ul}>
                <li style={styles.li}><a href="https://github.com/rpecuch"><FontAwesomeIcon icon={faGithub} size="2xl" style={styles.li}/></a></li>
                <li style={styles.li}><a href="https://www.linkedin.com/in/rita-pecuch/"><FontAwesomeIcon icon={faLinkedin} size="2xl" style={styles.li}/></a></li>
                <li style={styles.li}><a href="https://stackoverflow.com/users/20274103/rita-pecuch"><FontAwesomeIcon icon={faStackOverflow} size="2xl" style={styles.li}/></a></li>
          </ul>
        </footer>
    )
}

export default Footer;