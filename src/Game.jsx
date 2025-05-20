import { useState, useEffect } from "react";
import { getRandomPokemonList } from "./pokemonFetch";
import Scoreboard from "./Scoreboard";
import PokemonContainer from "./PokemonContainer";
import GameResults from "./GameResults";

export default function Game() {
  const [pokemonList, setPokemonList] = useState([]);
  const [listSize, setListSize] = useState(9)
  const [clickedIds, setClickedIds] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  const handleRestart = async() => {
    setClickedIds([]);
    setScore(0);
    setGameOver(false);
    setHasWon(false);

    const newList = await fetchData();
    setPokemonList(newList);
  }

  const handleClick = (id) => {
    console.log(clickedIds);
    if(clickedIds.includes(id)) {
      setGameOver(true);
      return;
    } else {
      const newIds = [...clickedIds, id];

      if(newIds.length === pokemonList.length) {
        setScore(score + 1)
        setHasWon(true);
        setGameOver(true);
      } else {
        setClickedIds(newIds);
        setScore(score + 1);
        handleShuffle();
      }
    }
  }

  const handleShuffle = () => {
    const newList = [...pokemonList];

    shuffleArray(newList);
    setPokemonList(newList);
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  const fetchData = async () => {
    const list = await getRandomPokemonList(listSize);

    return list;
  };

  useEffect(() => {
    let isMounted = true;

    fetchData().then(data => {
      if(isMounted) setPokemonList(data);
    });

    return () => {
      isMounted = false;
    };

  }, [listSize]);

  return(
    <>
      {gameOver && <GameResults hasWon={hasWon} />}
      <Scoreboard score={score} restart={handleRestart}/>
      {!gameOver && (
        <PokemonContainer 
          pokemonList={pokemonList} 
          handleClick={handleClick}
        />
      )}
      
    </>
  )
}