import React from 'react';

function DetailsEpisode(props) {
  return (
    <div>
        <p>
          <b>Air_date:</b> {props.air_date}
          <br></br>
          <b>Episode:</b> {props.episode}
        </p>
    </div>
  );
}
export default DetailsEpisode;