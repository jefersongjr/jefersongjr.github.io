import PropTypes from 'prop-types';

const data = {
  title: {
    EN: 'Stacks',
    BR: 'Tecnologias',
  },
};

function Stacks({ language }) {
  return (
    <section id="stacks" className="stacks-container">
      <h3>{data.title[language]}</h3>
    </section>
  );
}

Stacks.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Stacks;
