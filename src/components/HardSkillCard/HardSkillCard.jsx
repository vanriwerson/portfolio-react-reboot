import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HardSkillCard.css'

export default class HardSkillCard extends Component {
  render() {
    const { imgUrl, techName, techDescription } = this.props;
    return (
      <section className="hard-skill-card">
        <img
          src={ imgUrl }
          alt={ `Ícone da tecnologia ${techName}` }
        />
        <div className="hard-skill-info">
          <h2>{ techName }</h2>
          <p>{ techDescription }</p>
        </div>
      </section>
    );
  }
}

HardSkillCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  techName: PropTypes.string.isRequired,
  techDescription: PropTypes.string.isRequired,
};
