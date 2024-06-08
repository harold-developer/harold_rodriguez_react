import './App.css'; 
import React, {useState, useEffect} from 'react';
import CharacterCard from './Components/CharacterCard';

function App() {

  const [pagina, setPagina] = useState(1)
  const [charactersList, setCharactersList] = useState([]);
  const [info, setInfo] = useState({})

  useEffect( () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.info)
        setCharactersList(data.results)})
  }, [pagina])
  console.log(info)

  useEffect(() => {
    const url = new URL(window.location);
    const params = new URLSearchParams(url.search);
    const page = params.get('page');
    if (page) setPagina(parseInt(page));
  }, [])

  const addQueryParams = (increment) => {
    const newPage = pagina + increment;
    const url = new URL(window.location);
      url.searchParams.set('page', newPage);
      window.history.replaceState({}, '', url);
      setPagina(newPage);
  }
  
  return (
    <div className='wallpaper'>
      <h2 className='title'></h2>
      <div>
        <button className='button' onClick={ () => addQueryParams (-1)} >Prev</button>
        <button className='button' onClick={ () => addQueryParams (1)} >Next</button>
      </div>
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
        <div>
          <button className='button' onClick={ () => addQueryParams (-1)} >Prev</button>
          <button className='button' onClick={ () => addQueryParams (1)} >Next</button>
        </div>
    </div>
  );
}
export default App;