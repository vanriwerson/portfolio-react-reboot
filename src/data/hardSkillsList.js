import html from '../images/skills/html.svg';
import css from '../images/skills/css.svg';
import javascript from '../images/skills/javascript.svg';
import react from '../images/skills/react.svg';
import vuejs from '../images/skills/vuejs.svg';
import typescript from '../images/skills/typescript.svg';
import java from '../images/skills/java.svg';
import git from '../images/skills/git.svg';
import linux from '../images/skills/linux.svg';

const hardSkillsList = [
  {
    id: 'tech01',
    imgUrl: html,
    techName: 'HTML',
    techDescription: 'Do inglês HiperText Markup Language (Linguagem de Marcação de Hipertexto), é a ferramenta básica para estruturar conteúdo em um website.',
    moreAbout: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
  },
  {
    id: 'tech02',
    imgUrl: css,
    techName: 'CSS',
    techDescription: 'O CSS (Cascading Style Sheet) é utilizado para adicionar estilo ao HTML. Toda a estética de um site vem daqui.',
    moreAbout: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
  },
  {
    id: 'tech03',
    imgUrl: javascript,
    techName: 'Javascript',
    techDescription: 'É uma linguegem de programação através da qual podemos criar conteúdo dinâmico e/ou interações com o usuário.',
    moreAbout: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
  },
  {
    id: 'tech04',
    imgUrl: react,
    techName: 'React JS',
    techDescription: 'React JS é uma biblioteca JavaScript criada pelo time do Facebook e voltada para a implementação de interfaces de usuário (UI - User Interface)',
    moreAbout: 'https://pt-br.reactjs.org/docs/getting-started.html',
  },
  {
    id: 'tech05',
    imgUrl: vuejs,
    techName: 'Vue JS with VuetiFy',
    techDescription: `Vue (lê-se "viu") é um framework progressivo para a construção de UI e muito utilizado na criação SPA's (Single-Page Applications)`,
    moreAbout: 'https://br.vuejs.org/v2/guide/index.html',
  },
  {
    id: 'tech06',
    imgUrl: typescript,
    techName: 'Typescript',
    techDescription: 'O Typescript é um superconjunto de ferramentas e recursos não nativos da linguagem  JavaScript.',
    moreAbout: 'https://www.typescriptlang.org/docs/',
  },
  {
    id: 'tech07',
    imgUrl: java,
    techName: 'JAVA',
    techDescription: 'Java é uma linguagem de  orientada a objetos e ambiente computacional multiplataforma.',
    moreAbout: 'https://docs.oracle.com/en/java/',
  },
  {
    id: 'tech08',
    imgUrl: git,
    techName: 'Git',
    techDescription: 'GIT é um Sistema de Controle de Versão Distribuído que guarda todo o histórico de alterações do código gerenciado.',
    moreAbout: 'https://git-scm.com/docs/git/pt_BR',
  },
  {
    id: 'tech09',
    imgUrl: linux,
    techName: 'Linux',
    techDescription: 'O Linux é um sistema operacional open source baseado em Unix criado para desktops, mas que também é usado em servidores, smartphones, tablets e outros tipos de dispositivos.',
    moreAbout: '',
  },
];

export default hardSkillsList;
