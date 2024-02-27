import { useState } from 'react';
import PropTypes from 'prop-types';
import { GrDeploy } from 'react-icons/gr';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaGithub } from 'react-icons/fa';
import projects from '../utils/dataProjects';

const SIX = 6;
const HALF = 0.5;

function Projects({ language }) {
  const [startIndex, setStartIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(null);

  const showNextProjects = () => {
    setStartIndex((prevIndex) => prevIndex + SIX);
    setAnimationDirection('change-projects');
  };

  const showPreviousProjects = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - SIX));
    setAnimationDirection('change-projects');
  };

  const handleTransitionEnd = () => {
    setAnimationDirection(null);
  };

  const canShowNext = startIndex + SIX < projects.length;
  const canShowPrevious = startIndex > 0;

  return (
    <section id="projects" className="projects-container">
      <h3>Principais Projetos</h3>
      <div className="line-projects" />
      <div
        className={ `projects-preview ${animationDirection}` }
        onTransitionEnd={ handleTransitionEnd }
      >
        {projects.slice(startIndex, startIndex + SIX).map((project) => (
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
              { project.deployLink
                 && (
                   <a
                     href={ project.deployLink }
                     aria-label="GitHub Repository Link"
                   >
                     <GrDeploy className="icon" />
                   </a>)}
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-buttons">
        <button
          className="prev-button"
          onClick={ showPreviousProjects }
          aria-label="button arrow left"
          disabled={ !canShowPrevious }
          style={ { opacity: canShowPrevious ? 1 : HALF } }
        >
          <FaArrowAltCircleLeft className="arrow-projects" />
        </button>
        <button
          className="next-button"
          onClick={ showNextProjects }
          aria-label="button arrow right"
          disabled={ !canShowNext }
          style={ { opacity: canShowNext ? 1 : HALF } }
        >
          <FaArrowAltCircleRight className="arrow-projects" />
        </button>
      </div>

    </section>
  );
}

Projects.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Projects;
