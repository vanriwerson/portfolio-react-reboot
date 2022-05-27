import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './NavigationMenu.css';

export default class NavigationMenu extends Component{
  state = {
    isMenuOpen: false,
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }))
  }
  
  render() {
    const { isMenuOpen } = this.state;
    return (
      <section className="toggle-container">
        <div
          className={isMenuOpen ? "toggle-button active" : "toggle-button"}
          onClick={ this.toggleMenu }
        >
          <div className="line"></div>
        </div>
        <nav className={isMenuOpen ? "links active" : "links"}>
          <ul>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/about" className="link">About</Link></li>
            <li><Link to="/skills" className="link">Skills</Link></li>
            <li><Link to="/projects" className="link">Projects</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
          </ul>
        </nav>
      </section>
    );
  }
}
