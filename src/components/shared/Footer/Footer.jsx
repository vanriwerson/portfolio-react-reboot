import React, { Component } from 'react';
import githubIcon from '../../../images/socials/github.png';
import linkedinIcon from '../../../images/socials/linkedin.png';
import './Footer.css';

export default class Footer extends Component {  
  render () {
    return (
      <footer className="footer">
        <section className="socials">
          <h4>Follow me at:</h4>
          <a
            href="https://github.com/vanriwerson"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ githubIcon }
              alt="Github icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-riwerson/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ linkedinIcon }
              alt="Linkedin icon"
            />
          </a>
        </section>
        <section className="signature">
          <p>{'<dev> Bruno Riwerson Silva </dev>'}</p>
        </section>
      </footer>
    );
  }
}