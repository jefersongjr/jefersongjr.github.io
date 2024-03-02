import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const data = {
  copyright: {
    EN: '2024 © Jeferson Alves Gomes Júnior. Some rights reserved',
    BR: '2024 © Jeferson Alves Gomes Júnior. Alguns direitos reservados',
  },
  developed: {
    EN: 'Developed with React.js, Sass and react-icons',
    BR: 'Desenvolvido com React.js, Sass e react-icons',
  },
};

function Footer({ language }) {
  return (
    <footer id="footer" className="footer-container">
      <div className="contact-icon-container">
        <a
          href="https://github.com/jefersongjr"
          aria-label="github-icon"
          target="_blank"
        >
          <FaGithub className="contact-button" />
        </a>
        <a
          href="https://www.linkedin.com/in/jefersongjr/"
          aria-label="linkedin-icon"
          target="_blank"
        >
          <FaLinkedin className="contact-button" />
        </a>
        <a
          href="https://github.com/jefersongjr"
          aria-label="email-icon"
          target="_blank"
        >
          <MdEmail className="contact-button" />
        </a>
      </div>
      <p>{data.copyright[language]}</p>
      <p>{data.developed[language]}</p>
    </footer>
  );
}

Footer.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Footer;
