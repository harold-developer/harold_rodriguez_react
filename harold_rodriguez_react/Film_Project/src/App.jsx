import './App.css' 
import React, {useState, useEffect} from 'react';
import CharacterCard from './Components/CharacterCard';

function App() {

  const [character, setCharacter] = useState();
  const RickAndMortyCharacterId = 1;

  useEffect( () => {
    fetch("https://rickandmortyapi.com/api/character/"+RickAndMortyCharacterId)
      .then((response) => response.json())
      .then((result) => {
        setCharacter(result)
      });
  },[]);
  console.log(character) 
  
  return (
    <div>
      <h1 className='titulo'>Personajes de Rick and morty</h1>
      {character && (
        <CharacterCard key={character.Id} 
          title={character.name} 
          img={character.image} 
          gender={character.gender} 
          status={character.status} 
        />
      )}
    </div>
  );
}
export default App;

// creacion CharacterCard

// import './App.css' 
// import React from 'react';
// import Title from './Components/Title';
// import Image from './Components/Image';
// import Details from './Components/Details';
// import RickSanchez from './assets/Rick_Sanchez.jpg';

// function App() {
//   return (
//     <div className="card"> 
//       <Title 
//         title={"Rick Sanchez"}
//       />
//       <Image 
//         url={RickSanchez} 
//       />
//       <Details
//         gender={"masculino"} 
//         status={"alive"} 
//       />
//     </div>
//   );
// }
// export default App;