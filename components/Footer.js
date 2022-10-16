import React from 'react';

//TODO: install bootstrap and font awesome
//TODO: add link to profile on third website
function Footer () {
    return(
        <footer>
            <p class="text-center">Thank you for visiting!</p>
            <ul>
                <li><i class="fa-solid fa-arrow-up-right-from-square"></i><a href="https://github.com/rpecuch">View GitHub Profile</a></li>
                <li><i class="fa-solid fa-arrow-up-right-from-square"></i><a href="https://www.linkedin.com/in/rita-pecuch/">View LinkedIn Profile</a></li>
          </ul>
        </footer>
    )
}

export default Footer;