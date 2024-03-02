import PropTypes from 'prop-types';

const data = {
  title: {
    EN: `Let's Start a 
    Conversation`,
    BR: 'Vamos Iniciar uma Conversa',
  },
};

function Contacts({ language }) {
  return (
    <section id="contacts" className="contacts-container">
      <h3>{data.title[language]}</h3>
      <div className="line-contacts" />
    </section>
  );
}

Contacts.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Contacts;
