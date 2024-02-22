import perfil from '../assets/perfil.png';

function Home() {
  return (
    <section className="home-container">
      <div className="left-container">
        <div className="left-gradient-circle"> -</div>
        <div className="text-container">
          <h1>Jeferson Gomes</h1>
          <div className="line" />
          <h2>
            Full Stack
            <br />
            Developer
          </h2>
          <p>
            Construindo pontes digitais, um código de cada vez.
          </p>
          <button>Lets talk</button>
        </div>
      </div>
      <div className="right-container">
        <img src={ perfil } alt="" />
        <div className="right-gradient-circle" />
      </div>
    </section>
  );
}

export default Home;
