import React, {useState, useEffect} from 'react';
import CharacterCard from '../Components/CharacterCard';

function CharacterPage(props) {
  
  const [pagina, setPagina] = useState(1)
  const [charactersList, setCharactersList] = useState([]);
  const [info, setInfo] = useState({})

  useEffect( () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.info)
        setCharactersList(data.results)})
    console.log(info)
    console.log(charactersList);
  }, [pagina])

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

  const [nameFilter, setNameFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const onSearch = (e) => {
    e.preventDefault();

    let apiUrl = "https://rickandmortyapi.com/api/character/?";

    if (nameFilter) {
      apiUrl += `name=${nameFilter}&`;
    }
    if (genderFilter) {
      apiUrl += `gender=${genderFilter}&`;
    }
    if (speciesFilter) {
      apiUrl += `type=${speciesFilter}&`;
    }
    if (statusFilter) {
      apiUrl += `status=${statusFilter}&`;
    }

    apiUrl = apiUrl.slice(0, -1);

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setCharactersList(data.results);
    })  
  };

  return (
    <div>
      <h2 className='title'></h2>
      <form onSubmit={onSearch} className='container_form'>
        <div>
          <input className="input" value={nameFilter} onChange={(e) => 
            setNameFilter(e.target.value)} type="text" placeholder="Character Name"/>
          <select className="select" value={genderFilter} onChange={(e) => 
            setGenderFilter(e.target.value)} type="text">
            <option value="">Select Gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknown">Unknown</option>
          </select>
          <input className="input" value={speciesFilter} onChange={(e) => 
            setSpeciesFilter(e.target.value)} type="text" placeholder="Character Species"/>
          <select className="select" value={statusFilter} onChange={(e) => 
            setStatusFilter(e.target.value)} type="text">
            <option value="">Select Status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </select>
          <button className="button" type="submit">Search</button>
        </div>
      </form>      
      <div className='container_card'>
        {charactersList.length !== 0 && charactersList.map( (character) => (
          <CharacterCard key={character.id}
            title={character.name}
            img={character.image}
            gender={character.gender}
            status={character.status}
          />
        ))}
      </div>
      <div className='container_page'>
        <button className={`button`}  disabled={pagina === 1}
          onClick={ () => addQueryParams (-1)} >Prev</button>
        <button className={`button`} disabled={pagina === 42}
          onClick={ () => addQueryParams (+1)} >Next</button>
      </div>
    </div>
  );
}
export default CharacterPage;