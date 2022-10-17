import React, { useState } from 'react';

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

    return(
    <div class="jumbotron jumbotron-fluid custom-jumbo">
        <div class="container text-center bg-light custom-container">
          <h1 class="display-4">Contact Info</h1>
          <ul>
            <li><i class="fa-solid fa-phone"></i>517-375-7765</li>
            <li><i class="fa-solid fa-envelope"></i><a href="mailto:rpecuch@comcast.net">rpecuch@comcast.net</a></li>
          </ul>
        </div>
        <form class="container text-center bg-light">
            <h1>Contact Me</h1>
            <label for="name">Name:</label>
            <input value={name} name="name" onChange={inputChange} type="text"></input>
            <label for="email">Email address:</label>
            <input value={email} name="email" onChange={inputChange} type="email" placeholder="abc@test.com"></input>
            <label for="message">Message:</label>
            <textarea value={message} name="message" onChange={inputChange}></textarea>
            <button type="button" onClick={formSubmit}>Submit</button>
            <p>{confMessage}</p>
        </form>
    </div>
    )
}

export default Contact;