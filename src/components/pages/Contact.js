import React, { useState } from 'react';
import '../../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
//TODO: maybe have a background image
function Contact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [confMessage, setConfMessage] = useState('');

    const inputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
        }
        else if (name === 'email') {
            setEmail(value);
        }
        else {
            setMessage(value);
        }
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !message) {
            setConfMessage('Fill out all required fields!');
        }
        //TODO: fix this regex
        else if (!email.match(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/)) {
            setConfMessage('Invalid email format!')
        }
        else {
            setConfMessage('Message received!')
        }
        setName('');
        setEmail('');
        setMessage('');
    }

    const styles = {
        icon: {
            marginRight: '1%'
        },
        a: {
            textDecoration: 'none',
            color: 'inherit'
        }
    }

    return(
    <div class="jumbotron jumbotron-fluid d-flex outer-container">
        <div class="container text-center con-info">
          <h1 class="display-4">Contact Info</h1>
          <ul>
            <li><FontAwesomeIcon icon={faPhone} style={styles.icon}/>517-375-7765</li>
            <li id="email"><FontAwesomeIcon icon={faEnvelope} style={styles.icon}/><a href="mailto:rpecuch@comcast.net" style={styles.a} >rpecuch@comcast.net</a></li>
          </ul>
        </div>

        <form class="card con-card">
            <h5>Contact Me</h5>
            <div class="form-group">
                <label for="name">Name:</label>
                <input value={name} name="name" onChange={inputChange} type="text"></input>
            </div>
            <div class="form-group">
                <label for="email">Email address:</label>
                <input value={email} name="email" onChange={inputChange} type="email" placeholder="abc@test.com"></input>
            </div>
            <div class="form-group form-check">
                <label for="message">Message:</label>
                <textarea value={message} name="message" onChange={inputChange}></textarea>
            </div>
            <button type="button" onClick={formSubmit}>Submit</button>
            <p>{confMessage}</p>
        </form>
        
    </div>
    )
}

export default Contact;