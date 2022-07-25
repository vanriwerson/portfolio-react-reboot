import React, { Component } from "react";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import toolIcon from '../images/tool.png';
import profile from '../images/profile.png'
import './Home.css';

export default class Home extends Component{
  state = {
    skillList: ['HTML', 'CSS', 'Javascript', 'Jest', 'ReactJS', 'Redux', 'React Testing Library',
      'Context API', 'VueJS with Vuetify', 'Git & Github', 'Linux'],
    whatsappContact: '+55019991550438',
  }

  render () {
    const { skillList, whatsappContact } = this.state;
    return(
      <section className="home">
        <Header />
        <aside className="content home-skill-list">
          <h1>
            <img
              src={ toolIcon }
              alt="Ícone de ferramenta"
            />
            Actual toolkit
          </h1>
          <span>(Always increasing)</span>
          <ul>
            {
              skillList.map((skill, i) => (
                <li
                  key={ `skill${i}` }
                >
                  { skill }
                </li>
              ))
            }
          </ul>
        </aside>

        <main className="content">
          <h1>Boas-vindas ao meu Portfólio</h1>
          <img src={ profile } alt="Desenvolvedor Bruno Riwerson desejando boas-vindas" />

          <div className="cta-wrapper">
            <p>Meu nome é Bruno, Desenvolvedor Web motivado pela geração de soluções práticas e eficazes. Fico muito feliz por seu interesse em conhecer um pouco do meu trabalho.</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://api.whatsapp.com/send?phone=${whatsappContact}`}
              className="direct-msg"
            >Como posso te ajudar?</a>
          </div>
        </main>
        <Footer className="footer" />
      </section>
    );
  }
}