import Header from './components/Header';
import Home from './sections/Home';
import island from './images/island.jpg'


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
    </div>
  );
}

export default App;
