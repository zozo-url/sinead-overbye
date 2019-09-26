import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Nav =  (props) =>{
  return (
    <div className="Nav">
        <Link to="/"  className="link"><h3>SINEAD OVERBYE</h3></Link>
        {props.match.url === "/works" ? 
        <Link to="/about" className="link"><h3>ABOUT</h3></Link> : 
        <Link to="/works" className="link"><h3>WORKS</h3></Link>}
    </div>
  )
}

export default Nav;