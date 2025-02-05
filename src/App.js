import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Skills from './components/Skills';
import AllProjects from './pages/AllProjects';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
