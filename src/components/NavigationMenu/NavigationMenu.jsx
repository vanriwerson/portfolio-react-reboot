import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class NavigationMenu extends Component{
  render() {
    return (
      <nav className="navigation">
        <ul className="links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
}
