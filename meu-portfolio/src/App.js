import Header from './components/Header';
import Home from './sections/Home';
import island from './images/island.jpg'
import Sobre from './sections/Sobre';


function App() {
  return (
    <div className="App">
      <Header />
      <main style={{
        backgroundColor: '48BED9',
        backgroundImage: `url(${island})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}>
      <Home />
      </main>
      <Sobre />
    </div>
  );
}

export default App;
