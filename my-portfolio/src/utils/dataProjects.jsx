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
    // screenshot: screenshotsData[1],
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
    deployLink: 'https://raphaelalmeidamartins.github.io/sonic-trumps/',
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
    deployLink: 'https://raphaelalmeidamartins.github.io/sonic-trumps/',
  },
];

export default projects;