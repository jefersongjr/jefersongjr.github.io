import logo from '../assets/logotipo.png';
import logoGithub from '../assets/icons-github.png';
import logoLinkedin from '../assets/icons-linkedin.png';
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
  return (
    <header className="header-container">
      <img src={ logo } alt="meu logo" width="100px" />
      <nav className="nav-container">
        <ul className="navigation">
          {sections.map(({ name, href }) => (
            <li key={ name[language] }>
              <a href={ href }>
                {name[language]}
              </a>
            </li>))}
        </ul>
      </nav>
      <div className="icons-container">
        <button onClick={ () => setLanguage('BR') } className="language-button">
          <img src={ portuguese } alt="" width="25px" />
          BR
        </button>
        <button onClick={ () => setLanguage('EN') } className="language-button">
          <img src={ english } alt="" width="25px" />
          EN
        </button>
        <img src={ logoGithub } alt="logo-github" width="25px" />
        <img src={ logoLinkedin } alt="logo-linkedin" width="30px" />
      </div>
    </header>
  );
}

export default Header;
