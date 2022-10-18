import React from 'react';
import Navigation from './Navigation';

//TODO: make everything larger, responsive UI
function Header({ page, changePage}) {
    const styles = {
        header: {
            background: '#457B9D',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            padding: '2%'
        }
    }
    return(
        <header style={styles.header}>
            <div>
                <h1 className="text-center">Rita Pecuch</h1>
            </div>
            <Navigation page={page} changePage={changePage}/>
        </header>
    )
}

export default Header;