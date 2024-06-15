import React, {useState, useEffect} from 'react';
import CharacterCard from './CharacterCard';

function RickAndMortyCharacterCard(props) {

  const [character, setCharacter] = useState(null);
  const rickAndMortyCharacterId = props.id;    

  useEffect( () => {
    fetch("https://rickandmortyapi.com/api/character/"+rickAndMortyCharacterId)
      .then((response) => response.json())
      .then((data) => {
        setCharacter(data)
        console.log(data)
      });
  },[rickAndMortyCharacterId]);
  
  const handleCharacterClick = () => {
    setCharacter(character);
  };
  
  return (
    <div>
      {character && (    
        <CharacterCard key={character.id}
          title={character.name}
          img={character.image}
          gender={character.gender}
          status={character.status}
          onClick={handleCharacterClick}
        />
      )}
      <button onClick={() => setCharacter(null)}>Close</button>
    </div>
  );
}
export default RickAndMortyCharacterCard;