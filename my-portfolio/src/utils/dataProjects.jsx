/* eslint-disable max-lines */
import stacksData from './stackData';
import dataImg from './dataImg';

const projects = [
  {
    id: 1,
    title: 'Internet Segura',
    type: ['Front-end', 'Back-end'],
    preview: dataImg[1],
    description: {
      EN: 'Full-stack project on online safety for children.',
      BR: 'Projeto full stack sobre segurança online para crianças.',
    },
    tools: [
      stacksData.react,
      stacksData.css,
      stacksData.html,
      stacksData.js,
      stacksData.node,
      stacksData.express,
      stacksData.postgre,
      stacksData.axios,
      stacksData.lint,
      stacksData.docker,
    ],
    repositoryLink: 'https://github.com/jefersongjr/internet-segura',
    deployLink: 'https://internet-segura.vercel.app/',
  },
  {
    id: 2,
    title: 'Trybe Futebol Clube',
    type: ['Back-end'],
    preview: dataImg[2],
    description: {
      EN: 'RESTfull API built for sports league management.',
      BR: 'API RESTfull construida para gerenciar uma liga esportiva.',
    },
    tools: [
      stacksData.typescript,
      stacksData.node,
      stacksData.express,
      stacksData.sequelize,
      stacksData.mysql,
      stacksData.docker,
      stacksData.chai,
      stacksData.sinon,
      stacksData.mocha,
    ],
    repositoryLink: 'https://github.com/jefersongjr/trybe-futebol-clube',
  },
  {
    id: 3,
    title: 'Trivia Game',
    type: ['Front-end'],
    preview: dataImg[3],
    description: {
      EN: 'Trivia game created in React consuming a questions and answers API.',
      BR: 'Jogo de trivia criado em React consumindo uma API de perguntas e respostas.',
    },
    tools: [
      stacksData.react,
      stacksData.css,
      stacksData.html,
      stacksData.js,
      stacksData.redux,
      stacksData.jest,
      stacksData.lint,
    ],
    repositoryLink: 'https://github.com/jefersongjr/trivia-game',
    deployLink: 'https://trivia-game-xi.vercel.app/',
  },
  {
    id: 1,
    title: 'Internet Segura',
    type: ['Front-end', 'Back-end'],
    preview: dataImg[1],
    description: {
      EN: 'Full-stack project on online safety for children.',
      BR: 'Projeto full stack sobre segurança online para crianças.',
    },
    tools: [
      stacksData.react,
      stacksData.css,
      stacksData.node,
      stacksData.express,
      stacksData.postgre,
      stacksData.axios,
      stacksData.lint,
      stacksData.docker,
    ],
    repositoryLink: 'https://github.com/jefersongjr/internet-segura',
    deployLink: 'https://internet-segura.vercel.app/',
  },
  {
    id: 2,
    title: 'Internet Segura',
    type: ['Front-end', 'Back-end'],
    preview: dataImg[1],
    description: {
      EN: 'Projeto full stack sobre segurança online para crianças.',
      BR: 'Full-stack project on online safety for children.',
    },
    tools: [
      stacksData.react,
      stacksData.css,
      stacksData.node,
      stacksData.express,
      stacksData.postgre,
      stacksData.axios,
      stacksData.lint,
      stacksData.docker,
    ],
    repositoryLink: 'https://github.com/jefersongjr/internet-segura',
    deployLink: 'https://internet-segura.vercel.app/',
  },
  {
    id: 2,
    title: 'Internet Segura',
    type: ['Front-end', 'Back-end'],
    preview: dataImg[1],
    description: {
      EN: 'Projeto full stack sobre segurança online para crianças.',
      BR: 'Full-stack project on online safety for children.',
    },
    tools: [
      stacksData.react,
      stacksData.css,
      stacksData.node,
      stacksData.express,
      stacksData.postgre,
      stacksData.axios,
      stacksData.lint,
      stacksData.docker,
    ],
    repositoryLink: 'https://github.com/jefersongjr/internet-segura',
    deployLink: 'https://internet-segura.vercel.app/',
  }, {
    id: 1,
    title: 'Internet Segura',
    type: ['Front-end', 'Back-end'],
    preview: dataImg[1],
    description: {
      EN: 'Full-stack project on online safety for children.',
      BR: 'Projeto full stack sobre segurança online para crianças.',
    },
    tools: [
      stacksData.react,
      stacksData.css,
      stacksData.node,
      stacksData.express,
      stacksData.postgre,
      stacksData.axios,
      stacksData.lint,
      stacksData.docker,
    ],
    repositoryLink: 'https://github.com/jefersongjr/internet-segura',
    deployLink: 'https://internet-segura.vercel.app/',
  },
  {
    id: 2,
    title: 'Internet Segura',
    type: ['Front-end', 'Back-end'],
    preview: dataImg[1],
    description: {
      EN: 'Projeto full stack sobre segurança online para crianças.',
      BR: 'Full-stack project on online safety for children.',
    },
    tools: [
      stacksData.react,
      stacksData.css,
      stacksData.node,
      stacksData.express,
      stacksData.postgre,
      stacksData.axios,
      stacksData.lint,
      stacksData.docker,
    ],
    repositoryLink: 'https://github.com/jefersongjr/internet-segura',
    deployLink: 'https://internet-segura.vercel.app/',
  },
  {
    id: 2,
    title: 'Internet Segura',
    type: ['Front-end', 'Back-end'],
    preview: dataImg[1],
    description: {
      EN: 'Projeto full stack sobre segurança online para crianças.',
      BR: 'Full-stack project on online safety for children.',
    },
    tools: [
      stacksData.react,
      stacksData.css,
      stacksData.node,
      stacksData.express,
      stacksData.postgre,
      stacksData.axios,
      stacksData.lint,
      stacksData.docker,
    ],
    repositoryLink: 'https://github.com/jefersongjr/internet-segura',
    deployLink: 'https://internet-segura.vercel.app/',
  },
  {
    id: 1,
    title: 'Internet Segura',
    type: ['Front-end', 'Back-end'],
    preview: dataImg[1],
    description: {
      EN: 'Full-stack project on online safety for children.',
      BR: 'Projeto full stack sobre segurança online para crianças.',
    },
    tools: [
      stacksData.react,
      stacksData.css,
      stacksData.node,
      stacksData.express,
      stacksData.postgre,
      stacksData.axios,
      stacksData.lint,
      stacksData.docker,
    ],
    repositoryLink: 'https://github.com/jefersongjr/internet-segura',
    deployLink: 'https://internet-segura.vercel.app/',
  },
  {
    id: 2,
    title: 'Internet Segura',
    type: ['Front-end', 'Back-end'],
    preview: dataImg[1],
    description: {
      EN: 'Projeto full stack sobre segurança online para crianças.',
      BR: 'Full-stack project on online safety for children.',
    },
    tools: [
      stacksData.react,
      stacksData.css,
      stacksData.node,
      stacksData.express,
      stacksData.postgre,
      stacksData.axios,
      stacksData.lint,
      stacksData.docker,
    ],
    repositoryLink: 'https://github.com/jefersongjr/internet-segura',
    deployLink: 'https://internet-segura.vercel.app/',
  },
  {
    id: 2,
    title: 'jOjo POZE',
    type: ['Front-end', 'Back-end'],
    preview: dataImg[1],
    description: {
      EN: 'Projeto full stack sobre segurança online para crianças.',
      BR: 'Full-stack project on online safety for children.',
    },
    tools: [
      stacksData.react,
      stacksData.css,
      stacksData.node,
      stacksData.express,
      stacksData.postgre,
      stacksData.axios,
      stacksData.lint,
      stacksData.docker,
    ],
    repositoryLink: 'https://github.com/jefersongjr/internet-segura',
    deployLink: 'https://internet-segura.vercel.app/',
  },
];

export default projects;
