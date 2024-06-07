import './App.css';
import React, {useState, useEffect} from 'react';
import CharacterCard from './Components/CharacterCard';

function App() {
  const [charactersList, setCharactersList] = useState([]);
  useEffect( () => {
    fetch("https://rickandmortyapi.com/api/character/?page=1")
      .then((response) => response.json())
      .then((data) => {
        setCharactersList(data.results);
      });
  }, []);
  
  return (
    <div className='wallpaper'>
      <h2 className='title'></h2>
      <div className='container'>
        {charactersList.length !== 0 && charactersList.map( (character) => (
          <CharacterCard key={character.id}
            title={character.name}
            img={character.image}
            gender={character.gender}
            status={character.status}
          />
        ))}
      </div>
    </div>
  );
}
export default App;