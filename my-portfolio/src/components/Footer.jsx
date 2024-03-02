import PropTypes from 'prop-types';

const data = {
  copyright: {
    EN: 'full stack developer',
    BR: 'desenvolvedor full stack',
  },
};

function Footer({ language }) {
  return (
    <footer id="footer" className="footer-container">
        <div className="contact-icon-container">
            
        </div>
    </footer>
  );
}

Footer.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Footer;
