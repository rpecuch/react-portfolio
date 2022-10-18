import React, { useState } from 'react';
import '../../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
//TODO: maybe have a background image
function Contact () {
    const [contactName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [confMessage, setConfMessage] = useState('');

    const inputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
            setConfMessage('');
        }
        else if (name === 'email') {
            setEmail(value);
            setConfMessage('');
        }
        else {
            setMessage(value);
            setConfMessage('');
        }

        if (!contactName) {
            setConfMessage('Name is required')
        }
        if (!email) {
            setConfMessage('Email is required')
        }
        if (!message) {
            setConfMessage('Message is required')
        }
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if(!contactName || !email || !message) {
            setConfMessage('Fill out all required fields!');
        }
        //TODO: fix this regex
        else if (!email.match(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/)) {
            setConfMessage('Invalid email format!')
        }
        else {
            setConfMessage('Message received!');
            setName('');
            setEmail('');
            setMessage('');
        }
    }

    const styles = {
        icon: {
            marginRight: '1%'
        },
        a: {
            textDecoration: 'none',
            color: 'inherit'
        },
        heading: {
            fontSize: '300%',
            color: 'grey'
        },
        li: {
            fontSize: '150%'
        }
    }

    return(
    <div class="d-flex outer-container">
        <div class="card text-center con-info">
          <h2 style={styles.heading}>Contact Info</h2>
          <ul>
            <li style={styles.li}><FontAwesomeIcon icon={faPhone} size='lg' style={styles.icon}/>517-375-7765</li>
            <li id="email" style={styles.li}><FontAwesomeIcon icon={faEnvelope} size="lg" style={styles.icon}/><a href="mailto:rpecuch@comcast.net" style={styles.a} >rpecuch@comcast.net</a></li>
          </ul>

          <form>
            <h2 style={styles.heading}>Contact Me</h2>
            <div class="form-group">
                <label for="name" style={styles.li}>Name:</label>
                <input type="text" class="form-control" name="name" value={contactName} onChange={inputChange}/>
            </div>
            <div class="form-group">
                <label for="email" style={styles.li}>Email address:</label>
                <input type="email" class="form-control" value={email} name="email" onChange={inputChange} placeholder="name@example.com"/>
            </div>
            <div class="form-group">
                <label for="message" style={styles.li}>Message:</label>
                <textarea class="form-control" value={message} name="message" onChange={inputChange} rows="8"></textarea>
            </div>
            <button type="button" onClick={formSubmit}>Submit</button>
            <p style={styles.li}>{confMessage}</p>
        </form>
        </div>
        
    </div>
    )
}

export default Contact;