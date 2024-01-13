import { useState } from 'react';
import Navbar from './Components/Navbar.js';
import Introduction from './Components/Introduction.js';
import AboutMe from './Components/AboutMe.js';
import Projects from './Components/Projects.js';
import ContactMe from './Components/ContactMe.js';

function App() {
  return (
    <body class = "bg-slate-800">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Projects />
      <ContactMe />
    </body>
  );
}

export default App;