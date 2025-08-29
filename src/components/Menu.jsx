export default function Menu({ difficulty, handleDifficulty, startGame }) {
  const formatDifficulty = (difficulty) =>
    difficulty ? difficulty[0].toUpperCase() + difficulty.substring(1) : '';

  return (
    <main className='menu-container'>
      <h1 className='title'>PokeMemory</h1>
      <p className='difficulty-select'>
        Selected difficulty: {formatDifficulty(difficulty)}
      </p>

      <div className='difficulty-container'>
        <button
          className='btn difficulty easy'
          onClick={(e) => handleDifficulty(e.target.textContent)}>
          Easy
        </button>
        <button
          className='btn difficulty medium'
          onClick={(e) => handleDifficulty(e.target.textContent)}>
          Medium
        </button>
        <button
          className='btn difficulty hard'
          onClick={(e) => handleDifficulty(e.target.textContent)}>
          Hard
        </button>
      </div>
      <button className='btn play' onClick={() => startGame()}>
        Play
      </button>
    </main>
  );
}
