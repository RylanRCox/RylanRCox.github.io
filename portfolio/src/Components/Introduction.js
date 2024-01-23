import DownArrow from './DownArrow.js';

const Introduction = () => {
    return (
        <div id="Introduction" className="w-full h-screen bg-violet-900 flex flex-col justify-between items-center text-center px-4">
            <div className="flex-grow flex items-center justify-center">
                <div className="flex items-center text-center flex-col justify-center">
                    <div>
                        <h1 className="font-mono text-4xl md:text-7xl font-extrabold text-white transition-transform transform hover:scale-110">Welcome!</h1>
                    </div>
                    <div>
                        <h1 className="font-mono text-xl md:text-3xl font-extrabold text-white mt-3 md:mt-5 transition-transform transform hover:scale-110">My name is Rylan and I am a Developer.</h1>
                    </div>
                </div>
            </div>
            <a href="#AboutMe"><DownArrow /></a>
        </div>
    );
};

export default Introduction;
