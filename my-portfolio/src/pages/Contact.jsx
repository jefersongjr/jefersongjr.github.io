import PropTypes from 'prop-types';

const data = {
  title: {
    EN: `Let's Start a 
    Conversation`,
    BR: 'Vamos Iniciar uma Conversa',
  },
  name: {
    EN: 'My name is',
    BR: 'Meu nome é',
  },
  name_placeholder: {
    EN: 'Name',
    BR: 'Nome',
  },
  email: {
    EN: 'and my email is',
    BR: 'e meu email é',
  },
  interest: {
    EN: 'i am interested in',
    BR: 'Estou interessado em',
  },
  interest_placeholder: {
    EN: 'Send me your message',
    BR: 'Envie-me sua mensagem',
  },
};

function Contacts({ language }) {
  return (
    <section id="contacts" className="contacts-container">
      <h3>{data.title[language]}</h3>
      <div className="line-contacts" />
      <form action="https://formspree.io/jeferson_gjr@hotmail.com" method="POST" className="forms-container">
        <div className="forms-top-container">
          <label className="label-name">
            {data.name[language]}
            <input type="text" placeholder={ data.name_placeholder[language] } />
          </label>
          <label className="label-email">
            {data.name[language]}
            <input type="text" placeholder={ data.name_placeholder[language] } />
          </label>
        </div>
        <label className="label-message">
          {data.interest[language]}
          <input type="text" placeholder={ data.interest_placeholder[language] } />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

Contacts.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Contacts;
