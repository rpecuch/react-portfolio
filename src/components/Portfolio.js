import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function Portfolio() {
    const [page, setPage] = useState('Home');

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

    const changePage = (newPage) => setPage(newPage);
    
    return (
        <div>
            <Header page={page} changePage={changePage}/>
            {displayPage()}
            <Footer />
        </div>
    )
}