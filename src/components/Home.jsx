import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Home =  () =>{
  return (
    <div className="Home">
        <Link to="/about"><h2>about</h2></Link>
        <h1>SINEAD OVERBYE</h1>
        <Link to="/works"><h2>works</h2></Link>
    </div>
  )
}

export default Home;
