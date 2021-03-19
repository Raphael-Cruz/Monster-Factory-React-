import React from 'react';
import homeimage from '../img/homeimage.png';


const divStyle = {
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${homeimage})`,
  backgroundSize: 'cover'  
};

function Home() {
    return (
      <div className="HomeImage" style={divStyle} >
      
      </div>
    );
  }


export default Home;