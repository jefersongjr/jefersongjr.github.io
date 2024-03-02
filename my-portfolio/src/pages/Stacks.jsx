import PropTypes from 'prop-types';
import skillsByCategory from '../utils/data';

const data = {
  title: {
    EN: 'Stacks',
    BR: 'Tecnologias',
  },
};

const { front, back, test } = skillsByCategory;

function Stacks({ language }) {
  return (
    <section id="stacks" className="stacks-container">
      <div className="top-container">
        <h3>{data.title[language]}</h3>
        <div className="line-stacks" />
      </div>
      <div className="card-stacks-container">
        <div className="card-stacks">
          <h4 className="front">Front End</h4>
          {front.map(({ name, icon }) => (
            <div className="tag-skill" key={ name }>
              <span>{name}</span>
              <span className="icon">{ icon }</span>
            </div>
          ))}
        </div>

        <div className="card-stacks">
          <h4>Back End</h4>
          {back?.map(({ name, icon }) => (
            <div className="tag-skill" key={ name }>
              <span>{name}</span>
              <span className="icon">{ icon }</span>
            </div>
          ))}
        </div>
        <div className="card-stacks">
          <h4>Tests</h4>
          {test?.map(({ name, icon }) => (
            <div className="tag-skill" key={ name }>
              <span>{name}</span>
              <span className="icon">{ icon }</span>
            </div>
          ))}
        </div>
      </div>
      <div className="end-divisor" />

    </section>
  );
}

Stacks.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Stacks;
