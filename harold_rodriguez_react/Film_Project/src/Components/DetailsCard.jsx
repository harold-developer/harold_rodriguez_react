import React from 'react';

function DetailsCard(props) {
  return (
    <div>
        <p>
          <b>Genero:</b> {props.gender}
          <br></br>
          <b>Estado:</b> {props.status}
        </p>
    </div>
  );
}
export default DetailsCard;