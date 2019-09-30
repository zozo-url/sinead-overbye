import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Nav = props => {
  return (
    <div className="Nav">
      {props.match.url === "/about" ? (
        <div>
          <div className="link-space">
            <Link
              to="/about"
              className="link"
              Style="text-decoration: underline"
            >
              <h2>about</h2>
            </Link>
          </div>
          <div className="link-space">
            <Link to="/" className="nav-link">
              <h2 className="nav-title">sinead overbye</h2>
            </Link>
          </div>
          <div className="link-space">
            <Link to="/works" className="link">
              <h2>works</h2>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="link-space">
            <Link to="/about" className="link">
              <h2>about</h2>
            </Link>
          </div>
          <div className="link-space">
            <Link to="/" className="nav-link">
              <h2 className="nav-title">sinead overbye</h2>
            </Link>
          </div>
          <div className="link-space">
            <Link
              to="/works"
              className="link"
              Style="text-decoration: underline"
            >
              <h2>works</h2>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
