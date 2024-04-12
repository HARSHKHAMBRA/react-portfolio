// App.js

import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Learning from './components/Learning';
import MLAI from './components/MLAI';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Introduction />
        <Skills />
        <Education />
        <WorkExperience />
        <Learning />
        <MLAI />
        <Contact />
      </main>
    </div>
  );
}

export default App;
