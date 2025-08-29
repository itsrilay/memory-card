import { useState, useEffect } from 'react';
import { getRandomPokemonList } from '../pokemonFetch';
import Scoreboard from './Scoreboard';
import PokemonContainer from './PokemonContainer';
import GameResults from './GameResults';

export default function Game({ quitGame, difficulty }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [loading, setLoading] = useState(true);

  const getListSize = () => {
    switch (difficulty) {
      case 'easy':
        return 6;
      case 'medium':
        return 10;
      case 'hard':
        return 15;
      default:
        return 6;
    }
  };

  const handleRestart = async () => {
    setClickedIds([]);
    setScore(0);
    setGameOver(false);
    setHasWon(false);

    const newList = await fetchData();
    setPokemonList(newList);
  };

  const handleClick = (id) => {
    console.log(clickedIds);
    if (clickedIds.includes(id)) {
      setGameOver(true);
      return;
    } else {
      const newIds = [...clickedIds, id];

      if (newIds.length === pokemonList.length) {
        setScore(score + 1);
        setHasWon(true);
        setGameOver(true);
      } else {
        setClickedIds(newIds);
        setScore(score + 1);
        handleShuffle();
      }
    }
  };

  const handleShuffle = () => {
    const newList = [...pokemonList];

    shuffleArray(newList);
    setPokemonList(newList);
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const fetchData = async () => {
    setLoading(true);

    const size = getListSize();
    const list = await getRandomPokemonList(size);

    setLoading(false);

    return list;
  };

  useEffect(() => {
    let isMounted = true;

    fetchData().then((data) => {
      if (isMounted) setPokemonList(data);
    });

    return () => {
      isMounted = false;
      setLoading(false);
    };
  }, []);

  return (
    <main className='game-container'>
      {gameOver && <GameResults hasWon={hasWon} />}
      <Scoreboard score={score} restart={handleRestart} />
      {!gameOver && (
        <PokemonContainer
          pokemonList={pokemonList}
          handleClick={handleClick}
          loading={loading}
        />
      )}
      <button className='btn return' onClick={() => quitGame()}>
        Return to Menu
      </button>
    </main>
  );
}
