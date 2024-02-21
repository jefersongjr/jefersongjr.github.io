import logo from '../assets/logotipo.png';
import logoGithub from '../assets/icons-github.png';
import logoLinkedin from '../assets/icons-linkedin.png';

function Header() {
  return (
    <header className="header-container">
      <img src={ logo } alt="meu logo" width="100px" />
      <nav className="nav-container">
        <ul className="navigation">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>STACKS</li>
          <li>CONTATOS</li>
        </ul>
      </nav>
      <div className="icons-container">
        <img src={ logoGithub } alt="logo-github" width="25px" />
        <img src={ logoLinkedin } alt="logo-linkedin" width="30px" />
      </div>
    </header>
  );
}

export default Header;
