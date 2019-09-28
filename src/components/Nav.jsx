import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Nav =  (props) =>{
  return (
    <div className="Nav">
       {props.match.url === "/about" ? 
       <div>
        <Link to="/about" className="link" Style="text-decoration: underline"><h2>about</h2></Link>
        <h2 className= "nav-title">sinead overbye</h2>
        <Link to="/works" className="link"><h2>works</h2></Link>
        </div> :
        <div>
        <Link to="/about" className="link"><h2>about</h2></Link>
        <h2 className= "nav-title">sinead overbye</h2>
        <Link to="/works" className="link" Style="text-decoration: underline"><h2>works</h2></Link>
        </div>}
    </div>
  )
}

export default Nav;