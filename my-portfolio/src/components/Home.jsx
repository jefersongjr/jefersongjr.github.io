import perfil from '../assets/perfil.png';

function Home() {
  return (
    <section className="home-container">
      <div className="right-container">
        <div className="right-gradient-overlay"> -</div>
        <div className="text-container">
          <h1>Jeferson Gomes</h1>
          <div className="line" />
          <h2>
            Full Stack
            <br />
            Developer
          </h2>
          <p>Brabo dos sites e mais algumas coisas</p>
        </div>
      </div>
      <div className="left-container">
        <img src={ perfil } alt="" />
        <div className="left-gradient-circle" />
      </div>
    </section>
  );
}

export default Home;
