import './App.css' 
import React from 'react';
import Title from './Components/Title';
import Image from './Components/Image';
import Details from './Components/Details';
import RickSanchez from './assets/Rick_Sanchez.jpg';

function App() {
  return (
    <div className="card"> 
      <Title 
        title={"Rick Sanchez"}
      />
      <Image 
        url={RickSanchez} 
      />
      <Details
        gender={"Comedia Animada"} 
        distribution={"Warner Bros"} 
      />
    </div>
  );
}
export default App;