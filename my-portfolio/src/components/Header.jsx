import { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/logotipo.png';
import logoGithub from '../assets/icons-github.png';
import logoLinkedin from '../assets/icons-linkedin.png';
import iconMenu from '../assets/menu-icon.png';
import portuguese from '../assets/icons-brazil.png';
import english from '../assets/icons-usa.png';

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
    href: '#projects',
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setMenuVisible(true); // Exiba o menu automaticamente em telas maiores que 600px
      }
    };

    // Adicione um ouvinte de evento de redimensionamento para monitorar mudanças no tamanho da tela
    window.addEventListener('resize', handleResize);

    // Remova o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <img src={ logo } alt="meu logo" width="100px" />
      <nav>
        <button
          onClick={ onClick }
          className="menu-button"
        >
          <img src={ iconMenu } alt="Hamburguer menu  " />
        </button>
        <ul className={ menuVisible ? 'mobile-menu' : 'hidden' }>
          {sections.map(({ name, href }) => (
            <li key={ name[language] }>
              <a href={ href }>
                {name[language]}
              </a>
            </li>))}
        </ul>
      </nav>
      <div>
        <button onClick={ () => setLanguage('BR') }>
          <img src={ portuguese } alt="" width="25px" />
          BR
        </button>
        <button onClick={ () => setLanguage('EN') }>
          <img src={ english } alt="" width="25px" />
          EN
        </button>
        <img
          src={ logoGithub }
          alt="logo-github"
          width="25px"
          className="contact-button"
        />
        <img
          src={ logoLinkedin }
          alt="logo-linkedin"
          width="30px"
          className="contact-button"
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  setLanguage: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default Header;
