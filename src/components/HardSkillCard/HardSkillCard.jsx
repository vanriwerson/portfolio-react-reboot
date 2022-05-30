import React, { Component } from 'react';
import './HardSkillCard.css'

export default class HardSkillCard extends Component {
  render() {
    return (
      <section className="hard-skill-card">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
          alt="React icon"
        />
        <div className="hard-skill-info">
          <h2>React JS</h2>
          <p>React JS é uma biblioteca JavaScript para a criação de interfaces de usuário — ou UI (user interface)</p>
        </div>
      </section>
    );
  }
}