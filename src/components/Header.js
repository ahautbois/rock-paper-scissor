import React from 'react';
import Score from './Score';
import '../styles/Header.scss';

function Header({score}) {
    return(
        <header className="container">
                <h1>Rock <span>Paper</span> <span>scissor</span></h1>
                <Score score={score}/>
        </header>
    )
}

export default Header;