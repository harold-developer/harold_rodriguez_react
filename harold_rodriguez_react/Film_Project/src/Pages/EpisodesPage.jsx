import React, {useState, useEffect} from 'react';
import EpisodeCard from '../Components/EpisodeCard'

function App() {

  const [pagina, setPagina] = useState(1)
  const [episodesList, setEpisodesList] = useState([]);
  const [info, setInfo] = useState({})

  useEffect( () => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${pagina}`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.info)
        setEpisodesList(data.results)})
    console.log(info)
    console.log(episodesList);
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
  
  return (
    <div>
      <h2 className='title'></h2>
      <div className='container_page'>
        <button className={`button`}  disabled={pagina === 1} 
        onClick={ () => addQueryParams (-1)} >Prev</button>
        <button className={`button`} disabled={pagina === 3}
        onClick={ () => addQueryParams (1)} >Next</button>
      </div>
      <div className='container_card2'>
        {episodesList.length !== 0 && episodesList.map( (episode) => (
          <EpisodeCard key={episode.id}
            title={episode.name}
            air_date={episode.air_date}
            episode={episode.episode}
          />
        ))}
      </div>
        <div className='container_page'>
        <button className={`button`}  disabled={pagina === 1} 
        onClick={ () => addQueryParams (-1)} >Prev</button>
        <button className={`button`} disabled={pagina === 3}
        onClick={ () => addQueryParams (1)} >Next</button>
        </div>
    </div>
  );
}
export default App;