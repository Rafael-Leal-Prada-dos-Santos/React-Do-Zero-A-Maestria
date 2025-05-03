//CSS
import './App.css';

//REACT
import {useCallback, useEffect, useState} from "react";

//PALAVRAS
import {wordsList} from "./data/words"


//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import End from './components/End';

const stages = [
  {id: 1, name: "Start"},
  {id: 2, name: "Game"},
  {id: 3, name: "End"},
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  //Start do jogo
  const startGame = () => {
    setGameStage(stages[1].name)
  }

  //processar a letra digitada
  const verifyLetter = () =>{
    setGameStage(stages[2].name);
  }

  const restartGame = () =>{
    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'Start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'Game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'End' && <End restartGame={restartGame}/>}
    </div>
  );
}

export default App;
