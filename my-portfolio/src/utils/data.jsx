import stacksData from './stackData';

const {
  html,
  css,
  js,
  react,
  router,
  typescript,
  redux,
  sass,
  tailwind,
  boot,
  node,
  express,
  sequelize,
  docker,
  python,
  mysql,
  postgre,
  mongo,
  mongoose } = stacksData;

const skillsByCategory = {
  front: [html, css, js, react, router, typescript, redux, sass, tailwind, boot],
  back: [js, node, typescript, express, sequelize, docker,
    python, mysql, postgre, mongo, mongoose],
};

export default skillsByCategory;
