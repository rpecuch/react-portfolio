import React, { useState } from 'react';
//import components
import Header from './Header';
import Footer from './Footer';
//import pages
import About from './pages/About';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function Portfolio() {
    const [page, setPage] = useState('About');
    //renders a different page depending on current value of state variable page
    const displayPage = () => {
        if (page === 'About') {
            return <About />
        }
        if (page === 'Work') {
            return <Work />
        }
        if (page === 'Resume') {
            return <Resume />
        }
        else {
            return <Contact />
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