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
  mocha,
  chai,
  sinon,
  test,
  jest,
  java,
  spring,
  junit,
  pytest,
  mongoose } = stacksData;

const skillsByCategory = {
  front: [html, css, js, react, router, typescript, redux, sass, tailwind, boot],
  back: [js, node, express, sequelize, docker, spring, java,
    python, mysql, postgre, mongo, mongoose],
  test: [test, jest, chai, mocha, sinon, pytest, junit],
};

export default skillsByCategory;
