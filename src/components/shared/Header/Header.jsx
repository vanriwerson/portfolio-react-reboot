import React, { Component } from 'react';
import NavigationMenu from '../../NavigationMenu/NavigationMenu';
import './Header.css';

export default class Header extends Component {
  render () {
    return (
      <header className="header">
        <section className="logo">
          BR - DevWeb
        </section>
        <NavigationMenu />
      </header>
    );
  }
}
