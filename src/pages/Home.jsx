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
        </main>
        <Footer className="footer" />
      </section>
    );
  }
}