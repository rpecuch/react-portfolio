import React from 'react';
import Navigation from './Navigation';

//TODO: make everything larger, responsive UI
function Header({ page, changePage}) {
    const styles = {
        header: {
            background: 'grey',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            padding: '2%'
        }
    }
    return(
        <header style={styles.header}>
            <div>
                <h1 class="text-center">Rita Pecuch</h1>
            </div>
            <Navigation page={page} changePage={changePage}/>
        </header>
    )
}

export default Header;