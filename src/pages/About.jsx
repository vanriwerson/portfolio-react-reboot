import React, { Component } from "react";
import Footer from "../components/shared/Footer/Footer";
import Header from "../components/shared/Header/Header";
import './About.css';

export default class About extends Component{
  render () {
    return(
      <section className="about">
        <Header />
        <div className="about-content">
          <h1 className="animated-title">Um pouco de minha história</h1>
          <p>Nasci em Limeira, interior de São Paulo. Tive meu primeiro contato com tecnologia ainda na infância, através de jogos eletrônicos (os clássicos Atari, Mega Drive e Super Nintendo) e nutri essa paixão até a vida adulta.</p>
          <p>Possuo uma gama bem vasta de interesses. Estudo música desde os 13 anos de idade e já atuei como professor particular de violão e guitarra, fui instrumentista e vocalista em diversos projetos e pude aprimorar minha retórica, capacidade de negociação, escuta ativa e empatia, primordiais para o trablho em conjunto. Também já trabalhei como voluntário na Biblioteca Comunitária Oficina do Saber (Salão de Leitura Zélia Gattai), ensinando origami para as crianças e aperfeiçoando minha capacidade de transmitir conhecimento.</p>
          <p>Comecei a aprender VBA por conta própria, pesquisando em fóruns e assistindo a tutorais, pois queria agilizar meu trabalho, diminuindo a quantidade de "Ctrl-C's" e "Ctrl-V's" que fazíamos. E deu certo! Fiquei confiante com essa linguagem e cheguei até a desenvolver um Jogo da Velha pro Excel.</p>
          <p>A partir daí, minha curiosidade só aumentou. Eu busquei formas de programar para além do meu computador e poder mostrar minhas criações para todo mundo. Foi aí que me interessei por desenvolvimento web e iniciei o mesmo processo de estudar por tutoriais (minha gratidão a Gustavo Guanabara, Felipe Deschamps e ao casal nerd do canal Código Fonte TV ^^) e fóruns, o que foi muito bom para desenvolver em nível amador, mas não foi o bastante quando decidi que queria que essa fosse minha profissão.</p>
          <p>Desde então, iniciei o curso de Tecnólogo em Análise e Desenvolvimento de Sistema pela Estácio, busquei outros cursos livres e aperfeiçoei meu código, aprendi sobre boas práticas, metodologias ágeis, obtive a vivência da rotina de uma pessoa desenvolvedora através dos projetos da Trybe, amadureci a idéia de trabalhar com desenvolvimento de software e percebi que, para entregar excelência e gerar valor, NUNCA deixarei de estudar e aprender!</p>
          <p>Atualmente, resido em Araras com minha família e estou em busca da minha transição definitiva de carreira para áreas relacionadas a TI.</p>
          <a
              target="_blank"
              rel="noopener noreferrer"
              href={"https://api.whatsapp.com/send?phone=55019991550438"}
              className="direct-msg"
            >E então? Vamos criar algo juntos?</a>
        </div>
        <Footer />
      </section>
    );
  }
}