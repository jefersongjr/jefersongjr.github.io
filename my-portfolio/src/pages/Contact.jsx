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
    EN: 'my email is',
    BR: 'meu email é',
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
      <form action="https://formspree.io/f/xayrjkoa" method="POST" className="forms-container">
        <div className="forms-top-container">
          <label className="label-top">
            <span>{data.name[language]}</span>
            <input
              type="text"
              name="name"
              placeholder={ data.name_placeholder[language] }
            />
          </label>
          <label className="label-top">
            <span>{data.email[language]}</span>
            <input
              type="text"
              name="_replyto"
              placeholder={ data.name_placeholder[language] }
            />
          </label>
        </div>
        <label className="label-message">
          {data.interest[language]}
          <textarea name="message" placeholder={ data.interest_placeholder[language] } />
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
