import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css'

export default class ProjectCard extends Component {
  render() {
    const { imgUrl, linkToProject, projectName, projectDescription } = this.props;
    return (
      <section className="project-card">
        <a 
          href={ linkToProject }
          target='_blank'  
          rel="noreferrer"
        >
          <img
            src={ imgUrl }
            alt={ `Screenshot do Projeto ${projectName}` }
          />
        </a>

        <div className="project-info">
          <h2>{ projectName }</h2>
          <p>{ projectDescription }</p>
        </div>
      </section>
    );
  }
}

ProjectCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  linkToProject: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
};
