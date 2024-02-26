// Projects.jsx
import PropTypes from 'prop-types';
import projects from '../utils/dataProjects';

function Projects({ language }) {
  return (
    <section id="projects" className="projects-container">
      <h3>Principais Projetos</h3>
      <div className="line-projects" />
      <div className="projects-preview">
        {projects.map((project) => (
          <div key={ project.id } className="card">
            <img src={project?.preview } alt="prévia do projeto" width="100%" />
            <h2>{project.title}</h2>
            <p>{project.description[language]}</p>
            <div>
              Tools:
              {project.tools.map((tool) => (
                <span key={ tool?.name }>
                  {tool?.name}
                  {' '}
                  { tool?.icon}
                </span>
              ))}
            </div>
            <p>
              Repository Link:
              <a href={ project.repositoryLink }>{project.repositoryLink}</a>
            </p>
            <p>
              Deploy Link:
              <a href={ project.deployLink }>{project.deployLink}</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

Projects.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Projects;
