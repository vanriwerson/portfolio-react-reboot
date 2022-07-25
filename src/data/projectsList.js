import lagostaBoxeadora from '../images/projects/stomatopoda.png';
import vanrTimer from '../images/projects/vanr-timer.png';
import vanrCalc from '../images/projects/vanr-calc.png';

const projectsList = [
  {
    id: 'proj02',
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
];

export default projectsList;
