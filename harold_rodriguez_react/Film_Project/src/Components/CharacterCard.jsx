import React from 'react';
import Title from './Title';
import Image from './Image';
import DetailsCard from './DetailsCard';

function CharacterCard(props) {
  return (
    <div className='card' onClick={props.onClick}>
      <Title title={props.title}/>
      <Image url={props.img} />
      <DetailsCard
        gender={props.gender} 
        status={props.status} 
      />
    </div>
  )
}
export default CharacterCard;