// Projects.jsx
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { GrDeploy } from 'react-icons/gr';
import projects from '../utils/dataProjects';

function Projects({ language }) {
  return (
    <section id="projects" className="projects-container">
      <h3>Principais Projetos</h3>
      <div className="line-projects" />
      <div className="projects-preview">
        {projects.map((project) => (
          <div key={ project.id } className="card">
            <img src={ project?.preview } alt="prévia do projeto" width="100%" />
            <div className="info-project">
              <h2>{project.title}</h2>
              <p className="project-description">{project.description[language]}</p>
              <div className="tools-container">
                {project.tools.map((tool) => (
                  <div key={ tool?.name } className="stack-name">
                    <span className="icon-stack">{ tool?.icon }</span>
                    {' '}
                    <span>{tool?.name}</span>
                  </div>
                ))}
              </div>

            </div>
            <div className="icon-link">
              <a href={ project.repositoryLink } aria-label="GitHub Repository Link">
                <FaGithub className="icon" />
              </a>
              <a href={ project.deployLink } aria-label="GitHub Repository Link">
                <GrDeploy className="icon"/>
              </a>

            </div>
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
