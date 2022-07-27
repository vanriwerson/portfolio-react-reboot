import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationMenu from '../../NavigationMenu/NavigationMenu';
import './Header.css';

export default class Header extends Component {
  render () {
    return (
      <header className="header">
        <Link to="/" className="logo">
          <span className="logo-main">BRS</span>
          <span className="logo-sub">DevWeb</span>
        </Link>
        <NavigationMenu />
      </header>
    );
  }
}
