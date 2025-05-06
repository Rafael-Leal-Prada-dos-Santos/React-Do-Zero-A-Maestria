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

const  guessesQty = 3;

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(50);

  const pickWordAndCategory = useCallback(() => {
    // Encontrar uma categoria aleatoria
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
   
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  },[words])

  //Start do jogo
  const startGame = useCallback(() => {

    clearLetterStates();
    //picko4rd and pick category
    const { word, category } = pickWordAndCategory();


    //Criar um array de letras;
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //Setar Status
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  },[pickWordAndCategory])

  //processar a letra digitada
  const verifyLetter = (letter) =>{
    const normalizedLetter = letter.toLowerCase();

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(letter))
    {
      return;
    }

    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ]);
    }
    else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ]);

      setGuesses((actualGuesses) => actualGuesses = -1);
    }
 
    console.log(letter)
  }

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if(guesses <= 0){
      clearLetterStates();

      setGameStage(stages[2].name)
    }
  },[guesses])

  useEffect(() => {
    const uniqueLetters = [... new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length){
      setScore((actualScore) => actualScore += 100)

      startGame();
    }

  },[guessedLetters, letters, startGame])

  const restartGame = () =>{
    setScore(0);
    setGuesses(guessesQty);

    setGameStage(stages[0].name);
  }

  return (
    <div className="App">
      {gameStage === 'Start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'Game' && 
        <Game verifyLetter={verifyLetter} 
              pickedWord={pickedWord} 
              pickedCategory={pickedCategory}
              letters={letters} 
              guessedLetters={guessedLetters}
              wrongLetters={wrongLetters}
              guesses={guesses}
              score={score}
              />}
      {gameStage === 'End' && <End restartGame={restartGame} score={score}/>}
    </div>
  );
}

export default App;
