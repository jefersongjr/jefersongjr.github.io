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
      stacksData.router,
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
      stacksData.router,
      stacksData.redux,
      stacksData.jest,
      stacksData.lint,
    ],
    repositoryLink: 'https://github.com/jefersongjr/trivia-game',
    deployLink: 'https://trivia-game-xi.vercel.app/',
  },
  {
    id: 4,
    title: 'Front-End Online Store',
    type: ['Front-end'],
    preview: dataImg[4],
    description: {
      EN: 'Online shopping application built using the Mercado Livre API.',
      BR: 'Aplicação de shopping online construída a partir da API do Mercado Livre.',
    },
    tools: [
      stacksData.react,
      stacksData.css,
      stacksData.html,
      stacksData.router,
      stacksData.postgre,
      stacksData.axios,
      stacksData.lint,
      stacksData.docker,
    ],
    repositoryLink: 'https://github.com/jefersongjr/frontend-online-store',
    deployLink: 'https://frontend-online-store-rust.vercel.app/',
  },
  {
    id: 5,
    title: 'MongoDb Car Shop',
    type: ['Back-end'],
    preview: dataImg[5],
    description: {
      EN: 'Building an API to manage a car dealership using OOP and MongoDB.',
      BR: `Construção de uma API para gerenciar 
      concessionária de veículos utilizando POO e MongoDB.`,
    },
    tools: [
      stacksData.typescript,
      stacksData.node,
      stacksData.express,
      stacksData.mongo,
      stacksData.mocha,
      stacksData.chai,
      stacksData.sinon,
      stacksData.docker,
    ],
    repositoryLink: 'https://github.com/jefersongjr/mongodb-car-shopping',
  }, {
    id: 6,
    title: 'Python Jobs Insights',
    type: ['Data-Science'],
    preview: dataImg[6],
    description: {
      EN: `Analyses using Python functions on a 
      CSV dataset that contains information about job listings`,
      BR: ` Funções de análise de dados em Python em um conjunto de dados
       CSV que contém informações sobre vagas de emprego.`,
    },
    tools: [
      stacksData.python,
      stacksData.pytest,
    ],
    repositoryLink: 'https://github.com/jefersongjr/internet-segura',
    deployLink: 'https://internet-segura.vercel.app/',
  },
  {
    id: 7,
    title: 'Space Invaders Game',
    type: ['Back-end'],
    preview: dataImg[7],
    description: {
      EN: 'Clone of the classic arcade game Space Invaders',
      BR: 'Clone do clássico de arcade Space Invaders.',
    },
    tools: [
      stacksData.python,
      stacksData.pygames,
    ],
    repositoryLink: 'https://github.com/jefersongjr/space-invaders/',
  },
  {
    id: 8,
    title: 'Tests With RTL',
    type: ['Front-end'],
    preview: dataImg[8],
    description: {
      EN: 'Developed unit and integration tests for a React application project.',
      BR: `Desenvolvi testes unitários e de integração 
      para um projeto de aplicação React.`,
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
    repositoryLink: 'https://github.com/jefersongjr/tests-whith-RTL',
  },
  {
    id: 9,
    title: 'TrybeWarts',
    type: ['Front-end'],
    preview: dataImg[9],
    description: {
      EN: 'Enrollment form for the prestigious Wizard School ',
      BR: 'Formulário de inscrição para uma escola de bruxos renomada.',
    },
    tools: [
      stacksData.html,
      stacksData.css,
      stacksData.js,
    ],
    repositoryLink: 'https://github.com/jefersongjr/trybewarts',
    deployLink: 'https://trybewarts-indol.vercel.app/',
  },
  {
    id: 10,
    title: 'Blogs API',
    type: ['Back-end'],
    preview: dataImg[10],
    description: {
      EN: 'RESTful blog API using the MVC architecture.',
      BR: 'API RESTful de blog usando a arquitetura MSC',
    },
    tools: [
      stacksData.node,
      stacksData.express,
      stacksData.mysql,
      stacksData.sequelize,
      stacksData.lint,
      stacksData.docker,
    ],
    repositoryLink: 'https://github.com/jefersongjr/blogs-api',
  },
  {
    id: 11,
    title: 'Spotify ETL',
    type: ['Data-Science'],
    preview: dataImg[11],
    description: {
      EN: `Project performs ETL (Extraction, Transformation, and Loading) 
      on data from the most played songs on Spotify to identify 
      the top 50 artists with the highest streams.`,
      BR: `projeto realiza ETL em dados de músicas mais tocadas
      no Spotify para identificar os 50 artistas com mais streams.`,
    },
    tools: [
      stacksData.python,
      stacksData.pandas,
    ],
    repositoryLink: 'https://github.com/jefersongjr/DIO-ETL',
  }, {
    id: 12,
    title: 'Java API',
    type: ['Back-End'],
    preview: dataImg[12],
    description: {
      EN: 'Customers registration API',
      BR: 'API para o cadastro de clientes',
    },
    tools: [
      stacksData.java,
      stacksData.spring,
      stacksData.junit,
      stacksData.mockito,
    ],
    repositoryLink: 'https://github.com/jefersongjr/api-java-tt',
  },
];

export default projects;
