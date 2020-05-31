import React, {useEffect, useState} from 'react';
import ButtonChoice from './ButtonChoice';
import '../styles/Set-two.scss';

function SetTwo({name, computer, computerRand, result, resultat}) {
    
    const [showComputer, setShowComputer] = useState(false);
    const [isResult, setIsResult] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowComputer(true);
        }, 800);

        const timeResult = setTimeout(() => {
            result();
            setIsResult(true);
        }, 2000);

        return () => clearTimeout(timer, timeResult);

    }, [computer, result]);

    return(
        <div className={`set-two ${isResult ? 'show-result' : null}`}>
            <div>
                <h2>You picked</h2>
                <ButtonChoice  name={name}/>
            </div>
           <div className="result">
                <p className="text">{resultat}</p>
                <button className="btn-play">Play again</button>
            </div>

            <div>
                <h2>The house picked</h2>
                {showComputer ? <ButtonChoice  name={computer}/> : <div className="spot"></div>}
            </div> 
        </div>
        
    )
}

export default SetTwo;