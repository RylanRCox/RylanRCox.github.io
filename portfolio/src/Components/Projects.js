import DownArrow from './DownArrow.js';

const Projects = () => {
    return (
        <div id="Projects" class="w-full h-screen flex flex-col justify-between items-center text-center">
            <div class="flex-grow flex items-center justify-center">
                <div class="flex items-center text-center flex-col justify-center">
                    <div>
                        <h1 class="font-mono text-3xl font-extrabold text-white mt-5 transition-transform transform hover:scale-110">My Projects</h1>
                    </div>
                </div>
            </div>
            <a href = "#ContactMe"><DownArrow /></a>
        </div>
    );
};

export default Projects;