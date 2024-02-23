import PropTypes from 'prop-types';

const data = {
  title: {
    EN: 'about me',
    BR: 'sobre mim',
  },
  text: {
    EN: `Welcome to the captivating world of my journey as a Full Stack Developer. 
    In this realm, the fusion of creativity and technology gives rise to 
    exceptional visual narratives. 
    Driven by a passion for storytelling and paying meticulous attention to details, 
    I am about to embark on a journey to transform seemingly 
    simple code into extraordinary experiences. 
    Let's create something amazing together in the interactive web universe!`,
    BR: `Bem-vindo ao mundo fascinante da minha jornada como desenvolvedor 
    full stack. Neste lugar, a combinação de criatividade e tecnologia dá origem 
    a narrativas visuais excepcionais. Motivado pela paixão por contar histórias 
    e prestando atenção meticulosa aos detalhes, estou prestes a embarcar 
    em uma jornada para transformar 
    códigos aparentemente simples em experiências extraordinárias.
     Vamos criar algo incrível juntos no mundo interativo da web!`,
  },
  functions: [
    {
      name: {
        EN: 'Responsive Websites',
        BR: 'Sites Responsivos',
      },
    },
    {
      name: {
        EN: 'REST API',
        BR: 'Criação de API REST',
      },
    },
    {
      name: {
        EN: 'Systems Integration',
        BR: 'Integração de Sistemas',
      },
    },
    {
      name: {
        EN: 'Database Management',
        BR: 'Gerenciamento de Banco de Dados',
      },
    },

  ],
};

function About({ language }) {
  return (
    <section id="about" className="about-container">
      <h3>
        {data.title[language]}
      </h3>
      <div className="line-about" />
      <div className="text-container">
        <p>
          {data.text[language]}
        </p>
      </div>
      <div className="functions-container">
        <ul>
          {data.functions.map((item) => (
            <li key={ item.name[language] }>
              <div className="ball" />
              {item.name[language]}
            </li>))}
        </ul>
      </div>
    </section>
  );
}

About.propTypes = {
  language: PropTypes.string.isRequired,
};

export default About;
