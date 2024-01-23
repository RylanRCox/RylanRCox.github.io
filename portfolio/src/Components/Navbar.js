const Navbar = () => {
  return (
      <nav className="bg-violet-500 text-white p-4 fixed w-full flex justify-between items-center font-semibold text-xl z-50">
          <div className="flex items-center">
              <img className="h-10 md:h-14 rounded-full mr-2" src={require('../Assets/EggMan.jpg')} alt="Rylan Cox" />
              <span className="font-mono font-extrabold text-lg md:text-2xl">Rylan Cox</span>
          </div>
          <div className="hidden md:flex space-x-2 md:space-x-4">
              <a href="#Introduction" className="hover:bg-violet-900 px-2 md:px-3 py-1 md:py-2 rounded-md transition-transform transform hover:scale-110">Introduction</a>
              <a href="#AboutMe" className="hover:bg-violet-900 px-2 md:px-3 py-1 md:py-2 rounded-md transition-transform transform hover:scale-110">About Me</a>
              <a href="#Projects" className="hover:bg-violet-900 px-2 md:px-3 py-1 md:py-2 rounded-md transition-transform transform hover:scale-110">My Projects</a>
              <a href="#ContactMe" className="hover:bg-violet-900 px-2 md:px-3 py-1 md:py-2 rounded-md transition-transform transform hover:scale-110">Contact</a>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden">Menu</button>
      </nav>
  );
};

export default Navbar;
