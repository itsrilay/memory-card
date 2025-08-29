import { useState, useEffect } from 'react';

export default function Card({ pokemon, selectCard }) {
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setFirstRender(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={firstRender ? 'card show' : 'card'}>
      <button className='card-button' onClick={() => selectCard(pokemon.id)}>
        <div className='img-container'>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <p className='pokemon'>{pokemon.name}</p>
      </button>
    </div>
  );
}
