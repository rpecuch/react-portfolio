import React, { useState } from 'react';
//import components
import Header from './Header';
import Footer from './Footer';
//import pages
import About from './pages/About';
import Samples from './pages/Samples';
import Bio from './pages/Bio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function Portfolio() {
    const [page, setPage] = useState('About');
    //renders a different page depending on current value of state variable page
    const displayPage = () => {
        if (page === 'Samples') {
            return <Samples />
        }
        else if (page === 'Bio') {
            return <Bio />
        }
        else if (page === 'Resume') {
            return <Resume />
        } else if (page === 'Contact') {
            return <Contact />
        } else {
            return <About />
        }
    }
    //sets value of state variable page to the value of the input parameter
    const changePage = (newPage) => setPage(newPage);
    //renders portfolio (header, page, and footer)
    return (
        <div>
            <Header page={page} changePage={changePage}/>
            {displayPage()}
            <Footer />
        </div>
    )
}