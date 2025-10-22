import React from 'react';
import Hero from './components/hero/hero.jsx';
import './components/hero/hero.module.css'

import Navbar from './components/navbar/navbar.jsx';
import './components/navbar/navbar.jsx'


import About from './components/about/about.jsx';
import './components/about/about.module.css'

import Skills from './components/skills/skills.jsx';
import './components/skills/skills.module.css'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    </div>
  );
};

export default App;