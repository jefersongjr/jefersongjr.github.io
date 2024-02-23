import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

function App() {
  const [language, setLanguage] = useState('EN');

  return (
    <div>
      <Header setLanguage={ setLanguage } language={ language } />
      <main>
        <Home language={ language } />
        <About language={ language } />
      </main>
    </div>
  );
}

export default App;
