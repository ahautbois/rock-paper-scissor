import React, {useEffect} from 'react';
import ButtonChoice from './ButtonChoice';
import '../styles/Set-two.scss';

function SetTwo({user, computer, showResult, result, replay, showCompChoice, setShowCompChoice}) {


    useEffect(() => {
        
        const timerCompChoice = setTimeout(() => {
            if (user && computer) {
                setShowCompChoice(true);
            }
        }, 500);
       
        const timer = setTimeout(() => {
            if (user && computer) {
                showResult();
            }
        }, 1000);
        return () => clearTimeout(timer, timerCompChoice);

    }, [computer, user]);

    const winCircle = (
        <div className="circle-win">
            <span></span>
            <span></span>
            <span></span>
        </div>
    )

    return(
        <div className={`set-two ${result ? 'show-result' : 'container'}`}>
            <div className="bloc bloc-user">
                <h2>You picked</h2>
                <div className={`choice ${result === 'win' ? 'win' : ''}`}>
                    <div className="container-btn">
                        <ButtonChoice  name={user}/>
                    </div>
                    {result === 'win' ? winCircle : null}
                </div>
                
            </div>
            {result && <div className="result">
                <p className="text">{result === 'win' || result === 'lose' ? `You ${result}` : result}</p>
                <button className={`btn-play`} onClick={replay}>Play again</button>
            </div> }

            <div className="bloc bloc-computer">
                <h2>The house picked</h2>
                <div className={`choice ${result === 'lose' ? 'win' : ''}`}>
                    <div className="container-btn">
                        {showCompChoice ? <ButtonChoice  name={computer} />  : <div className="spot"></div>}
                    </div>
                    {result === 'lose' ? winCircle : null}
                </div>
                
            </div> 
        </div>
        
    )
}

export default SetTwo;