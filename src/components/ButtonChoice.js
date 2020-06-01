import React from 'react';
import '../styles/Button-choice.scss';

function ButtonChoice({name, option, isComp}) {

    return(
        <button className={`btn-choice ${name} ${isComp ? 'btn-comp' : ''}`} onClick={() => option ? option(name) : null}>
            <span className="icon"></span>
        </button>  
    )
}

export default ButtonChoice;