import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {  
  render () {
    return (
      <footer className="footer">
        <section className="socials">
          <h4>Find me at:</h4>
          <a
            href="https://github.com/vanriwerson"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-riwerson/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </section>
        <p>{'<dev> Bruno Riwerson Silva </dev>'}</p>
      </footer>
    );
  }
}