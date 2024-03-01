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
        <div className="line-about" />
      </div>
      <div className="card-stacks-container">
        <div className="card-stacks">
          <h4>Front End</h4>
          {front.map(({ name, icon }) => (
            <div className={ name } key={ name }>
              <span>{name}</span>
              <span className={ `icon ${name}` }>{ icon }</span>
            </div>
          ))}
        </div>

        <div className="card-stacks">
          <h4>Back End</h4>
          {back?.map((stack) => (
            <div className={ stack.name } key={ stack.name }>
              <span>{stack.name}</span>
              {stack.icon}
            </div>
          ))}
        </div>
        <div className="card-stacks">
          <h4>Tests</h4>
          {test?.map((stack) => (
            <div className={ stack.name } key={ stack.name }>
              <span>{stack.name}</span>
              {stack.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Stacks.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Stacks;
