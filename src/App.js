import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import ButtonChoice from './components/ButtonChoice';
import './styles/App.scss';

function App() {

  const [user, setChoice] = useState(null);
  const [computer, setComputer] = useState(null);
  const [resultat, setResult] = useState(null);


  const result = () => {
    if ((user === 'paper' && computer === 'rock') || (user === 'rock' && computer === 'scissor') || (user === 'scissor' && computer === 'paper')) {
      setResult('win');
    } else if ((computer === 'paper' && user === 'rock') || (computer === 'rock' && user === 'scissor') || (computer === 'scissor' && user === 'paper')) {
      setResult('lose');
    } else if (computer === user) {
      setResult('tie');
    } else {
      setResult('not valid');
    }
  };

  useEffect(() => {
    const elemList = ['rock', 'paper', 'scissor'];
    const compChoice = elemList[Math.floor(Math.random() * elemList.length)];
    if(user) {
      setComputer(compChoice);
      result();
    }

  });

  

  return (
    <div className="App container">
      <Header />
      <main>
          <ButtonChoice />
      </main>
      <button onClick={()=> setChoice('paper')}>Paper</button>
      <button onClick={()=> setChoice('scissor')}>Scissors</button>
      <button onClick={()=> setChoice('rock')}>Rock</button>
      <h1>Me: {user}</h1>
      <hr></hr>
      <h2>Computer: {computer ? computer : "Waiting user's choice"} </h2>
      <p>{resultat}</p>
    </div>
  );
}

export default App;
