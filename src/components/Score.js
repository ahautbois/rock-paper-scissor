import React from 'react';
import '../styles/Score.scss';

function Score({score}) {
    return(
        <div className="score">
            <p className="caption">score</p>
            <p className="number">{score}</p>
        </div>
    )
}

export default Score;