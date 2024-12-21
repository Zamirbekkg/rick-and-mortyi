import React, { useState, useEffect } from 'react';
import './App.scss';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="characters-container">
      <h1 className="title">The Rick and Morty API</h1>
      <div className="character-list">
        {characters.map((character) => (
          <div className="character-card" key={character.id}>
            <img className="character-image" src={character.image} alt={character.name} />
            <div className="character-info">
              <h2>{character.name}</h2>
              <p>{character.status} - {character.species}</p>
              <p><strong>Location:</strong> {character.location.name}</p>
              <p><strong>First seen in:</strong> {character.origin.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
  