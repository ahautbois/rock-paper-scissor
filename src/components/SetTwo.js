import React from 'react';
import ButtonChoice from './ButtonChoice';
import '../styles/Set-two.scss';

function SetTwo({name}) {
    

    return(
        <div className="set-two">
            <h2>You picked</h2>
            <h2>The house picked</h2>
            <ButtonChoice  name={name}/>
            <div className="spot"></div>
        </div>
        
    )
}

export default SetTwo;