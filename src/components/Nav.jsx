import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Nav =  (props) =>{
  return (
    <div className="Nav">
        <Link to="/about" className="link"><h2>about</h2></Link>
        <Link to="/"  className="link"><h2>sinead overbye</h2></Link>
        <Link to="/works" className="link"><h2>works</h2></Link>
    </div>
  )
}

export default Nav;