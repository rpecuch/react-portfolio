import React from 'react';
import Navigation from './Navigation';
//TODO: use page variable to make the tab for current page stand out
function Header({ page, changePage}) {
    return(
        <header>
            <div>
                <h1>Rita Pecuch</h1>
            </div>
            <Navigation page={page} changePage={changePage}/>
        </header>
    )
}

export default Header;