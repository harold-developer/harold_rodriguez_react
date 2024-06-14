import React from 'react';
import Title from './Title';
import DetailsEpisode from './DetailsEpisode';

function EpisodeCard(props) {
  return (
    <div className='card2'>
      <Title title={props.title}/>
      <br></br>
      <br></br>
      <br></br>
      <DetailsEpisode
        air_date={props.air_date} 
        episode={props.episode} 
      />
    </div>
  )
}
export default EpisodeCard;