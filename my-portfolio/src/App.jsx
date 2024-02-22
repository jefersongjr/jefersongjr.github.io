import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [language, setLanguage] = useState('EN');

  return (
    <div>
      <Header setLanguage={ setLanguage } language={ language } />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
