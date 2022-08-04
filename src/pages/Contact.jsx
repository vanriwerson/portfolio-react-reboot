import React, { Component } from "react";
import githubIcon from '../images/socials/github.png';
import linkedinIcon from '../images/socials/linkedin.png';
import whatsApp from '../images/whatsapp.png';
import mail from '../images/mail.png'
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import './Contact.css';

export default class Contact extends Component{
  render () {
    return(
      <section className="contact">
        <Header />
        <div className="card-wrapper">
          <div className="contact-card">
            <h1>Acompanhe minha trajetória e evolução profissional</h1>
            <a
              href="https://github.com/vanriwerson"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <img
                src={ githubIcon }
                alt="Github icon"
              />
              <p>Github</p>
            </a>
            <a
              href="https://www.linkedin.com/in/bruno-riwerson/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <img
                src={ linkedinIcon }
                alt="Linkedin icon"
              />
              <p>Linkedin</p>
            </a>
          </div>
          <div className="contact-card">
            <h1>Fale comigo! Posso transformar sua ideia em código!</h1>
            <a
              href="https://api.whatsapp.com/send?phone=55019991550438"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <img
                src={ whatsApp }
                alt="Whatsapp icon"
              />
              <p>Whatsapp</p>
            </a>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <img
                src={ mail }
                alt="E-mail icon"
              />
              <p>riwerson@gmail.com</p>
            </a>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
}