import React from 'react';
import ButtonChoice from './ButtonChoice';
import '../styles/Set-one.scss';

function SetOne({choicesList, option, compChoice, setComp}) {
    const choices = choicesList.map((choice, index) => <div className="container-btn" key={index}><ButtonChoice  name={choice} option={option} compChoice={compChoice} setComp={setComp}/></div>)

    return(
        <div className="set">
            {choices}
        </div>
    )
}

export default SetOne;