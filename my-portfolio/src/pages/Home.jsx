import PropTypes from 'prop-types';
import perfil from '../assets/imgs/perfil.png';

const data = {
  title: {
    EN: 'full stack developer',
    BR: 'desenvolvedor full stack',
  },
  text: {
    EN: 'Building digital bridges, one line of code at a time.',
    BR: 'Construindo pontes digitais, um código de cada vez.',
  },
  button: {
    EN: 'lets talk',
    BR: 'fale comigo',
  },
};

function Home({ language }) {
  return (
    <section id="home" className="home-container">
      <div className="left-container">
        <div className="left-gradient-circle"> -</div>
        <div className="text-container">
          <h1>Jeferson Gomes</h1>
          <div className="line" />
          <h2>
            {data.title[language]}
          </h2>
          <p>
            {data.text[language]}
          </p>
          <button>{data.button[language]}</button>
        </div>
      </div>
      <div className="right-container">
        <img src={ perfil } alt="" />
        <div className="right-gradient-circle" />
      </div>
    </section>
  );
}

Home.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Home;
