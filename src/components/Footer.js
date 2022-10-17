import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

//TODO: add link to profile on third website
//TODO: make everything larger, responsive UI
function Footer () {
    const styles = {
        footer: {
            background: '#d1d1e0',
            display: 'flex',
            flexDirection: 'column',
        },
        p: {
            marginTop: '2%'
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
            <p class="text-center" style={styles.p}>Thank you for visiting!</p>
            <ul style={styles.ul}>
                <li style={styles.li}><a href="https://github.com/rpecuch"><FontAwesomeIcon icon={faGithub} style={styles.li}/></a></li>
                <li style={styles.li}><a href="https://www.linkedin.com/in/rita-pecuch/"><FontAwesomeIcon icon={faLinkedin} style={styles.li}/></a></li>
          </ul>
        </footer>
    )
}

export default Footer;