import React, { Component } from "react";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import profile from '../images/profile.png'
import './Home.css';

export default class Home extends Component{
  render () {
    return(
      <section className="home">
        <Header />
        <main className="content">
          <h1>Boas-vindas ao meu Portfólio</h1>
          <img src={ profile } alt="Foto de Bruno Riwerson" />

          <div className="cta-wrapper">
            <p>Meu nome é Bruno, Desenvolvedor Web aficionado pela geração de soluções práticas e eficazes. Fico muito feliz por seu interesse em conhecer um pouco do meu trabalho.</p>
            <button>Como posso te ajudar?</button>
          </div>
        </main>
        <Footer className="footer" />
      </section>
    );
  }
}