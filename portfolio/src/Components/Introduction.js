import DownArrow from './DownArrow.js';

const Introduction = () => {
    return (
        <div id="Introduction" class="w-full h-screen bg-violet-900 flex flex-col justify-between items-center text-center">
            <div class="flex-grow flex items-center justify-center">
                <div class="flex items-center text-center flex-col justify-center">
                    <div>
                        <h1 class="font-mono text-7xl font-extrabold text-white transition-transform transform hover:scale-110">Welcome!</h1>
                    </div>
                    <div>
                        <h1 class="font-mono text-3xl font-extrabold text-white mt-5 transition-transform transform hover:scale-110">My name is Rylan and I am a Developer.</h1>
                    </div>
                </div>
            </div>
            <a href = "#AboutMe"><DownArrow /></a>
        </div>
    );
};

export default Introduction;