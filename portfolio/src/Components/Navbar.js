const Navbar = () => {
    return (
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between">
            <div className="flex space-x-4">
                <a href="#Introduction" className="hover:bg-blue-700 px-3 py-2 rounded-md">Introduction</a>
                <a href="#AboutMe" className="hover:bg-blue-700 px-3 py-2 rounded-md">About Me</a>
                <a href="#Projects" className="hover:bg-blue-700 px-3 py-2 rounded-md">My Projects</a>
                <a href="#ContactMe" className="hover:bg-blue-700 px-3 py-2 rounded-md">Contact</a>
            </div>
        </div>
      </nav>
    );
  };

  export default Navbar;