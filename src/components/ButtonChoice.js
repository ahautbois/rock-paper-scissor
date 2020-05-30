import React from 'react';
import '../styles/Button-choice.scss';

function ButtonChoice({name, option}) {
    return(
        <button className={`btn-choice ${name}`} onClick={()=> option ? option(name): null}>
            <span className="icon"></span>
        </button>  
    )
}

export default ButtonChoice;