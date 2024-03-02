import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/imgs/logotipo.png';
import iconMenu from '../assets/icons/menu-icon.png';
import portuguese from '../assets/icons/icons-brazil.png';
import english from '../assets/icons/icons-usa.png';

const sections = [
  {
    name: {
      EN: 'HOME',
      BR: 'INÍCIO',
    },
    href: '#home',
  },
  {
    name: {
      EN: 'ABOUT',
      BR: 'SOBRE',
    },
    href: '#about',
  },
  {
    name: {
      EN: 'PROJECTS',
      BR: 'PROJETOS',
    },
    href: '#projects',
  },
  {
    name: {
      EN: 'STACKS',
      BR: 'TECNOLOGIAS',
    },
    href: '#stacks',
  },
  {
    name: {
      EN: 'CONTACT',
      BR: 'CONTATO',
    },
    href: '#contact',
  },
];

function Header({ setLanguage, language }) {
  const [menuVisible, setMenuVisible] = useState(true);

  const onClick = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <img src={ logo } alt="meu logo" className="logo" width="100px" />
      <button
        onClick={ onClick }
        className="menu-button"
      >
        <img src={ iconMenu } alt="Hamburguer menu  " />
      </button>
      <div className="button-container">
        <button onClick={ () => setLanguage('BR') }>
          <img src={ portuguese } alt="" width="25px" />
          BR
        </button>
        <button onClick={ () => setLanguage('EN') }>
          <img src={ english } alt="" width="25px" />
          EN
        </button>
        <a href="https://github.com/jefersongjr" aria-label="github-icon" target="_blank"><FaGithub className="contact-button" /></a>
        <a
          href="https://www.linkedin.com/in/jefersongjr/"
          aria-label="github-icon"
          target="_blank"
        >
          <FaLinkedin className="contact-button" />
        </a>
      </div>
      <nav>
        <ul className={ menuVisible ? 'mobile-menu' : 'hidden' }>
          {sections.map(({ name, href }) => (
            <li key={ name[language] }>
              <a href={ href }>
                {name[language]}
              </a>
            </li>))}
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  setLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default Header;
