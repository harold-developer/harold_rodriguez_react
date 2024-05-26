import React from 'react';

function Details(props) {
  return (
    <div>
        <p>
          <b>Genero:</b> {props.gender}
        </p>
        <p>
          <b>Distribuidor:</b> {props.distribution}
        </p>
    </div>
  );
}
export default Details;