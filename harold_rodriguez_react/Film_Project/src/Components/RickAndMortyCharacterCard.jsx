import React, {useState, useEffect} from 'react';
import CharacterCard from './CharacterCard';

function RickAndMortyCharacterCard(props) {

    const [character, setCharacter] = useState();
    const rickAndMortyCharacterId = props.id;    
  
    useEffect( () => {
      fetch("https://rickandmortyapi.com/api/character/"+rickAndMortyCharacterId)
        .then((response) => response.json())
        .then((result) => {
          setCharacter(result)
        });
    },[rickAndMortyCharacterId]);
    console.log(character)
    
    return (
    <div>
      {character && (    
        <CharacterCard key={character.id}
          title={character.name}
          img={character.image}
          gender={character.gender}
          status={character.status}
        />
      )}
    </div>
    );
}
export default RickAndMortyCharacterCard;