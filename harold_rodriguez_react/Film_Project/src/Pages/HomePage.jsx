import React from 'react';
import {Link} from 'react-router-dom';
import Front from '../assets/Front_Page.png';

function HomePage(props) {
  return (
    <div className='container_start'>
      <h2> Welcome to the Page </h2>
      <h2 className='title'></h2>
      <img src= {Front} alt='image'/>
      <h3> Quick Links </h3>
      <div className='link'>
        <Link className='link' to="/characters">
          Go to Characters
        </Link>
        <Link className='link' to="/episodes">
          Go to Episodes
        </Link>
      </div>
    </div>
  );
}
export default HomePage;