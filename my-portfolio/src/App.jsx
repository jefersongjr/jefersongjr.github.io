import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [language, setLanguage] = useState('EN');

  return (
    <div>
      <Header setLanguage={ setLanguage } language={ language } />
      <main>
        OLA
        <p>{language}</p>
      </main>
    </div>
  );
}

export default App;
