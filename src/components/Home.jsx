import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Home =  () =>{
  return (
    <div className="Home">
        <Link to="/about" className="link"><h2 Style="margin-bottom: 40vh">about</h2></Link>
        <h1 Style="margin-bottom: 40vh">sinead overbye</h1>
        <Link to="/works" className="link"><h2 Style="margin-top: 40vh">works</h2></Link>
    </div>
  )
}

export default Home;
