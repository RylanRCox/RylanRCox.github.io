import Navbar from './Components/Navbar.js';
import Socials from './Components/Socials.js';
import Introduction from './Components/Introduction.js';
import AboutMe from './Components/AboutMe.js';
import Projects from './Components/Projects.js';
import ContactMe from './Components/ContactMe.js';

function App() {
  return (
    <body className="bg-slate-100 font-mono text-base sm:text-lg md:text-xl break-words">
      <Navbar />
      <Socials />
      <Introduction />
      <AboutMe />
      <Projects />
      <ContactMe />
    </body>
  );
}

export default App;
