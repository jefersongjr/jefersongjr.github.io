import PropTypes from 'prop-types';

function Projects({ language }) {
  return (
    <section id="projects" className="projects-container">
      <h3>Principais Projetos</h3>
      <div className="line-projects" />
      <div className="projects-preview">
        <div className="card">
          <img
            src="https://github.com/jefersongjr/internet-segura/blob/main/front-end/src/image/preview.gif?raw=true"
            alt="imagem do card"
            width="300px"
          />
          <div className="stacks-container" />
          <p>{language}</p>
        </div>

      </div>
    </section>
  );
}

Projects.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Projects;
