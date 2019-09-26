import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Nav =  (props) =>{
  return (
    <div className="Nav">
        <Link to="/"><h3>SINEAD OVERBYE</h3></Link>
        {props.match.url === "/works" ? 
        <Link to="/about"><h3>ABOUT</h3></Link> : 
        <Link to="/works"><h3>WORKS</h3></Link>}
    </div>
  )
}

export default Nav;