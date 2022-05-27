import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationMenu from '../../NavigationMenu/NavigationMenu';

export default class Header extends Component {
  render () {
    return (
      <header className="header">
        <section className="Logo">
          BR - DevWeb
        </section>
        <NavigationMenu />
      </header>
    );
  }
}
