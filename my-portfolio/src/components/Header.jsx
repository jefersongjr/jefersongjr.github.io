import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
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

const screen = 1250;

function Header({ setLanguage, language }) {
  const [menuVisible, setMenuVisible] = useState(true);

  // Esse função está fazendo o nav= display none quando renderiza a tela.
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > screen) {
        setMenuVisible(true);
      } else {
        setMenuVisible(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const onClick = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <Helmet>
        <title>Jeferson Gomes</title>
        <link rel="icon" type="image/png" href={ logo } sizes="64x32" />
      </Helmet>
      <img src={ logo } alt="meu logo" className="logo" width="100px" />
      <button
        onClick={ onClick }
        className="menu-button"
      >
        <img src={ iconMenu } alt="Hamburguer menu" />
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
          aria-label="linkedin-icon"
          target="_blank"
        >
          <FaLinkedin className="contact-button" />
        </a>
      </div>
      <nav className={ menuVisible ? 'mobile-menu' : 'hidden' }>
        <ul>
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
