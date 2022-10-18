import React from 'react';
//import navbar component
import Navigation from './Navigation';

function Header({ page, changePage}) {
    //define custom styles
    const styles = {
        header: {
            background: '#457B9D',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            padding: '2%'
        }
    }
    //renders header using custom styles
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