import React from 'react';
import { FaReact, FaNode, FaCss3Alt, FaDocker } from 'react-icons/fa6';
import { SiExpress, SiPostgresql, SiAxios, SiEslint } from 'react-icons/si';

const stacksData = {
  react: { name: 'ReactJs', icon: <FaReact /> },
  css: { name: 'CSS3', icon: <FaCss3Alt /> },
  node: { name: 'NodeJs', icon: <FaNode /> },
  express: { name: 'Express', icon: <SiExpress /> },
  postgre: { name: 'PostgreSQL', icon: <SiPostgresql /> },
  axios: { name: 'Axios', icon: <SiAxios /> },
  lint: { name: 'EsLint', icon: <SiEslint /> },
  docker: { name: 'Docker', icon: <FaDocker /> },
};

export default stacksData;
