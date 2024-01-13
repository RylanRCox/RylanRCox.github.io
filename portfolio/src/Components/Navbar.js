const Navbar = () => {
    return (
      <nav className="bg-violet-500 text-white p-4 fixed w-full flex font-semibold text-2xl">
        <div className = "container flex justify-start items-center">
            <div class = "mr-3">
                <img class = "h-14 rounded-full" src = {require('../Assets/EggMan.jpg')} alt = "Rylan Cox" />
            </div>
            <span className="font-mono font-extrabold">Rylan Cox</span>
        </div>
        <div className="container flex justify-end">
            <div className="flex space-x-4 justify-evenly items-center whitespace-nowrap">
                <a href="#Introduction" className="hover:bg-violet-900 px-3 py-2 rounded-md">Introduction</a>
                <a href="#AboutMe" className="hover:bg-violet-900 px-3 py-2 rounded-md">About Me</a>
                <a href="#Projects" className="hover:bg-violet-900 px-3 py-2 rounded-md">My Projects</a>
                <a href="#ContactMe" className="hover:bg-violet-900 px-3 py-2 rounded-md">Contact</a>
            </div>
        </div>
      </nav>
    );
  };

  export default Navbar;