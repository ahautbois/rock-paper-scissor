import React from 'react';
import Score from './Score';
import '../styles/Header.scss';

function Header() {
    return(
        <header>
                <h1>Rock <span>Paper</span> <span>scissor</span></h1>
                <Score />
        </header>
    )
}

export default Header;