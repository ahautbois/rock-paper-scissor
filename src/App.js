import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import SetOne from './components/SetOne';
import SetTwo from './components/SetTwo';
import Footer from './components/Footer';
import data from './gameData';

import './styles/App.scss';

function App() {


  const choicesList = Object.keys(data);
  
  const compChoice = choicesList[Math.floor(Math.random() * choicesList.length)];

  const [user, setChoice] = useState(null);
  const [computer, setComputer] = useState(null);
  const [result, setResult] = useState(null);
  let [score, setScore] = useState(parseInt(localStorage.getItem('score')) || 0);
  const [showCompChoice, setShowCompChoice] = useState(false);


  
  const showResult = () => {
    
    const resultData = data[user][computer].result;

    setResult(resultData);

    if (resultData === 'win') {
      setScore(score + 1);
    } else if (resultData === 'lose') {
      if (score > 0) {
        setScore(score - 1);
      }
    } else {
      setScore(score);
    }
  
  };

  const playAgain = () => {
    setChoice(null);
    setComputer(null);
    setResult(null);
    setShowCompChoice(false);
  };

  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  return (
    <div className="App">
      <Header score={score} />
      <main>
        {user ? <SetTwo user={user} compChoice={compChoice} computer={computer} setComp={setComputer} showResult={showResult} result={result} replay={playAgain} showCompChoice={showCompChoice} setShowCompChoice={setShowCompChoice} /> : <SetOne choicesList={choicesList} option={setChoice} compChoice={compChoice} setComp={setComputer}/>}
      </main>   
      <Footer  />
    </div>
  );
}

export default App;
