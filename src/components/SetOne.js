import React from 'react';
import ButtonChoice from './ButtonChoice';
import '../styles/Set-one.scss';

function SetOne({choicesList, option}) {
    const choices = choicesList.map(choice => <div className="container-btn"><ButtonChoice name={choice} option={option}/></div>)

    return(
        <div className="set">
            {choices}
        </div>
    )
}

export default SetOne;