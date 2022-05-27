import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render () {
    return (
      <header className="header">
        <section className="Logo">
          BR - DevWeb
        </section>
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    );
  }
}
