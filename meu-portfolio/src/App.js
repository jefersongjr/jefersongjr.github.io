import Header from './components/Header';
import Home from './sections/Home';
import island from './images/island.jpg'
import Sobre from './sections/Sobre';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <main style={ {
        backgroundColor: '48BED9',
        backgroundImage: `url(${island})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      } }>
      <Home />
      <Sobre />
      <Skills />
      <Projects />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
