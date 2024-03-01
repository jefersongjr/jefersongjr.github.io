import PropTypes from 'prop-types';
import skillsByCategory from '../utils/data';

const data = {
  title: {
    EN: 'Stacks',
    BR: 'Tecnologias',
  },
};

const { front, back } = skillsByCategory;

function Stacks({ language }) {
  return (
    <section id="stacks" className="stacks-container">
      <h3>{data.title[language]}</h3>
      <div className="line-about" />
      <div className="card-stacks-container">
        <div className="card-stacks-front">
          {front.map(({ name, icon }) => (
            <div className={ name } key={ name }>
              <span>{name}</span>
              { icon }
            </div>
          ))}
        </div>

        <div className="card-stacks">
          {back?.map((stack) => (
            <div className={ stack.name } key={ stack.name }>
              <span>{stack.name}</span>
              {stack.icon}
            </div>
          ))}
        </div>
        <div className="card-stacks">Jest</div>
      </div>
    </section>
  );
}

Stacks.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Stacks;
