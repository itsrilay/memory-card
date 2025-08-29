import { useState } from 'react';
import Game from './components/Game';
import Menu from './components/Menu';

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState('medium');

  const handleGameStart = () => setGameStarted(!gameStarted);

  const handleDifficulty = (difficulty) => {
    setDifficulty(difficulty.toLowerCase());
    console.log(difficulty.toLowerCase());
  };

  return (
    <>
      {gameStarted ? (
        <Game difficulty={difficulty} quitGame={handleGameStart} />
      ) : (
        <Menu
          difficulty={difficulty}
          handleDifficulty={handleDifficulty}
          startGame={handleGameStart}
        />
      )}
    </>
  );
}
