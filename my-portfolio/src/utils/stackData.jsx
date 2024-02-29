import React from 'react';
import { FaReact, FaNode, FaCss3Alt, FaDocker, FaHtml5 } from 'react-icons/fa6';
import {
  SiExpress,
  SiPostgresql,
  SiAxios,
  SiEslint,
  SiMongodb,
  SiMongoose,
  SiTypescript,
  SiReactrouter,
  SiTestinglibrary,
  SiChai,
  SiRedux,
  SiMysql,
  SiJest,
  SiSequelize,
  SiMocha } from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';
import { LuTestTube2 } from 'react-icons/lu';

const stacksData = {
  react: { name: 'ReactJs', icon: <FaReact /> },
  css: { name: 'CSS3', icon: <FaCss3Alt /> },
  html: { name: 'HTML5', icon: <FaHtml5 /> },
  router: { name: 'React Router', icon: <SiReactrouter /> },
  test: { name: 'Testing Library', icon: <SiTestinglibrary /> },
  js: { name: 'JavaScript', icon: <RiJavascriptFill /> },
  node: { name: 'NodeJs', icon: <FaNode /> },
  express: { name: 'Express', icon: <SiExpress /> },
  postgre: { name: 'PostgreSQL', icon: <SiPostgresql /> },
  axios: { name: 'Axios', icon: <SiAxios /> },
  lint: { name: 'EsLint', icon: <SiEslint /> },
  docker: { name: 'Docker', icon: <FaDocker /> },
  typescript: { name: 'TypeScript', icon: <SiTypescript /> },
  mocha: { name: 'Mocha', icon: <SiMocha /> },
  chai: { name: 'Chai', icon: <SiChai /> },
  sinon: { name: 'Sinon', icon: <LuTestTube2 /> },
  mysql: { name: 'MySql', icon: <SiMysql /> },
  sequelize: { name: 'Sequelize', icon: <SiSequelize /> },
  redux: { name: 'Redux', icon: <SiRedux /> },
  jest: { name: 'Jest', icon: <SiJest /> },
  mongo: { name: 'MongoDB', icon: <SiMongodb /> },
  mongoose: { name: 'MongoDB', icon: <SiMongoose /> },
};

export default stacksData;
