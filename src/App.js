import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <div className="left-pane">
        <Header />
        <Footer />

      </div>
      <div className="right-pane">
        <main>
          {/* <Home /> */}
          <About />
          <Skills />
          <Experience />
          <Projects />
        </main>
      </div>
    </div>
  );
}

export default App;
