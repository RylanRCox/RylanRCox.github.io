import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-violet-500 text-white p-4 fixed w-full flex justify-between items-center font-semibold text-xl z-50">
      <div className="flex items-center">
        <img className="h-10 md:h-14 rounded-full mr-2" src={require('../Assets/EggMan.jpg')} alt="Rylan Cox" />
        <span className="font-mono font-extrabold text-lg md:text-2xl">Rylan Cox</span>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4">
        <a href="#Introduction" className="hover:bg-violet-900 px-3 py-2 rounded-md transition-transform transform hover:scale-110">Introduction</a>
        <a href="#AboutMe" className="hover:bg-violet-900 px-3 py-2 rounded-md transition-transform transform hover:scale-110">About Me</a>
        <a href="#Projects" className="hover:bg-violet-900 px-3 py-2 rounded-md transition-transform transform hover:scale-110">My Projects</a>
        <a href="#ContactMe" className="hover:bg-violet-900 px-3 py-2 rounded-md transition-transform transform hover:scale-110">Contact</a>
      </div>
      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</button>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 bg-violet-500 flex flex-col items-start md:hidden p-2">
          <a href="#Introduction" className="block text-white hover:bg-violet-900 px-3 py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Introduction</a>
          <a href="#AboutMe" className="block text-white hover:bg-violet-900 px-3 py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>About Me</a>
          <a href="#Projects" className="block text-white hover:bg-violet-900 px-3 py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>My Projects</a>
          <a href="#ContactMe" className="block text-white hover:bg-violet-900 px-3 py-2 rounded-md" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
