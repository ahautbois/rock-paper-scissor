import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import SetOne from './components/SetOne';
import SetTwo from './components/SetTwo';

import './styles/App.scss';

function App() {


  const choicesList = ['paper', 'scissors', 'rock'];
  
  const compChoice = choicesList[Math.floor(Math.random() * choicesList.length)];

  const [user, setChoice] = useState(null);
  const [computer, setComputer] = useState(null);
  const [result, setResult] = useState(null);
  let [score, setScore] = useState(parseInt(localStorage.getItem('score')) || 0);


  
  const showResult = () => {
      
    if ((user === 'paper' && computer === 'rock') || (user === 'rock' && computer === 'scissors') || (user === 'scissors' && computer === 'paper')) {
      setResult('You win');
      console.log(`winbefore: ${score}`);
      
      setScore(score + 1);
      console.log(`winafter: ${score}`);

    } else if ((computer === 'paper' && user === 'rock') || (computer === 'rock' && user === 'scissors') || (computer === 'scissors' && user === 'paper')) {
      setResult('You lose');
      if (score > 0){
        console.log(`losebefore: ${score}`);

        setScore(score - 1);
        console.log(`loseafter: ${score}`);

      }
    } else if (computer === user) {
      setResult("it's a tie");
      console.log(`tiebefore: ${score}`);

      // setScore(score);
      console.log(`tieafter: ${score}`);

    } else {
      setResult('Error');
    }
    
    
  };

  const playAgain = () => {
    setChoice(null);
    setComputer(null);
    setResult(null);
  }

  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  return (
    <div className="App container">
      <Header score={score}/ >
      <main>
        {user ? <SetTwo user={user} compChoice={compChoice} computer={computer} setComp={setComputer} showResult={showResult} result={result} replay={playAgain} /> : <SetOne choicesList={choicesList} option={setChoice}/>}
      </main>   
    </div>
  );
}

export default App;
