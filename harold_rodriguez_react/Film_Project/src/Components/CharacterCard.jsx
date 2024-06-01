import React from 'react';
import Title from './Title';
import Image from './Image';
import Details from './Details';

function CharacterCard(props) {
  return (
    <div className='card'>
      <Title title={props.title}/>
      <Image url={props.img} />
      <Details 
        gender={props.gender} 
        status={props.status} 
      />
    </div>
  )
}
export default CharacterCard;