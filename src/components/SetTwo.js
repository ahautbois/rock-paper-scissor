import React, {useEffect, useState} from 'react';
import ButtonChoice from './ButtonChoice';
import '../styles/Set-two.scss';

function SetTwo({user, computer, setComp, compChoice, showResult, result, replay}) {

    const [isResult, setIsResult] = useState(true);


    useEffect(() => {
        
        setComp(compChoice);
        if (user && computer) {
            showResult();
        }
        

    }, [computer]);

    return(
        <div className={`set-two ${result ? 'show-result' : ''}`}>
            <div>
                <h2>You picked</h2>
                <ButtonChoice  name={user}/>
            </div>
            {result && <div className="result">
                <p className="text">{result}</p>
                <button className="btn-play" onClick={replay}>Play again</button>
            </div> }
           

            <div>
                <h2>The house picked</h2>
                {computer ? <ButtonChoice  name={computer}/> : <div className="spot"></div>}
            </div> 
        </div>
        
    )
}

export default SetTwo;