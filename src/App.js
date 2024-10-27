import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="left-pane">
        <Header />
        <Footer />
      </div>
      <div className="right-pane">
        <main>
          <Home />
          <Experience />
          <Projects />
        </main>
      </div>
    </div>
  );
}

export default App;
