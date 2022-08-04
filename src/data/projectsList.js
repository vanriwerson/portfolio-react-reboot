import lagostaBoxeadora from '../images/projects/stomatopoda.png';
import vanrTimer from '../images/projects/vanr-timer.png';
import vanrCalc from '../images/projects/vanr-calc.png';
import wallet from '../images/projects/wallet.png';
import movies from '../images/projects/movies.png';
import portfolio from '../images/projects/portfolio.png';

const projectsList = [
  {
    id: 'proj01',
    imgUrl: lagostaBoxeadora,
    linkToProject: 'https://vanr-stomatopoda.netlify.app/',
    projectName: 'Lagosta Boxeadora',
    projectDescription: 'Primeiro compilado de informações feito por mim. Site simples desenvolvido somente com HTML e CSS, seguindo o pensamento "mobile first".',
  },
  {
    id: 'proj02',
    imgUrl: vanrTimer,
    linkToProject: 'https://vanr-timer-countdown.netlify.app/',
    projectName: 'Cronômetro Regressivo',
    projectDescription: 'Criado para o estudo de ciclo de vida dos componentes react utilizando o setInterval.',
  },
  {
    id: 'proj03',
    imgUrl: vanrCalc,
    linkToProject: 'https://vanr-calculators.netlify.app/',
    projectName: 'Calculadoras',
    projectDescription: 'Prática de lógica de programação e ferramentas de desenvolvimento frontend aprendidas.',
  },
  {
    id: 'proj04',
    imgUrl: wallet,
    linkToProject: 'https://vanr-wallet.netlify.app/',
    projectName: 'VanR Wallet',
    projectDescription: 'Tabela de controle de despesas com conversão de moedas utilizando Redux.',
  },
  {
    id: 'proj05',
    imgUrl: movies,
    linkToProject: 'https://bruno-riwerson-dsmovie.netlify.app/',
    projectName: 'DSMovie',
    projectDescription: 'App desenvolvido durante a Semana Spring React da escola DevSuperior. Pude exercitar e aprimorar o uso das ferramentas React, Typescript, Java, Springboot, Heroku e integração entre Frontend, Backend e Banco de dados',
  },
  {
    id: 'proj06',
    imgUrl: portfolio,
    linkToProject: 'https://vanr-calculators.netlify.app/',
    projectName: 'Meu portfólio',
    projectDescription: 'Review completo do primeiro portfólio que criei, refatorado para ReactJS.',
  },
];

export default projectsList;
