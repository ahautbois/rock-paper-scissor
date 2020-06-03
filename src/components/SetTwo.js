import React, {useEffect} from 'react';
import ButtonChoice from './ButtonChoice';
import '../styles/Set-two.scss';

function SetTwo({user, computer, showResult, result, replay}) {


    useEffect(() => {
        
        if (user && computer) {
            showResult();
        }
        

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
            <div>
                <h2>You picked</h2>
                <div className={`${result === 'win' ? 'win' : ''}`}>
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

            <div>
                <h2>The house picked</h2>
                <div className={`${result === 'lose' ? 'win' : ''}`}>
                    <div className="container-btn">
                        {computer ? <ButtonChoice  name={computer} />  : <div className="spot"></div>}
                    </div>
                    {result === 'lose' ? winCircle : null}
                </div>
                
            </div> 
        </div>
        
    )
}

export default SetTwo;