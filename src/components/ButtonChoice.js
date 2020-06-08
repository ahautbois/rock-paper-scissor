import React from 'react';
import '../styles/Button-choice.scss';

function ButtonChoice({name, option, isComp, setComp, compChoice}) {

    const choice = () => {
        option(name);
        setComp(compChoice);
    };

    return(
        <button className={`btn-choice ${name} ${isComp ? 'btn-comp' : ''}`} onClick={option ? choice : null}>
            <span className="icon"></span>
            <span className="shadow-circle"></span>
        </button>
    )
}

export default ButtonChoice;