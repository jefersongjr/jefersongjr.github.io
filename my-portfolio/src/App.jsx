import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Stacks from './pages/Stacks';
import Contacts from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState('EN');

  return (
    <div>
      <Header setLanguage={ setLanguage } language={ language } />
      <main>
        <Home language={ language } />
        <About language={ language } />
        <Projects language={ language } />
        <Stacks language={ language } />
        <Contacts language={ language } />
      </main>
      <Footer language={ language } />
    </div>
  );
}

export default App;
