import DownArrow from './DownArrow.js';
import ProjectsGrid from './ProjectsGrid.js';

const Projects = () => {
    const myProjects = [
        {
            project: 'Live Scoreboard',
            description: 'An integrated live scoreboard into the existing software of PrairieLearn. Required live communication, PostgreSQL database involving triggers, front-end web design, and project management skills. This was designed for an end-of-degree Capstone Project.',
            skills: ['JavaScript', 'PostgreSQL', 'HTML', 'Node.js', 'Docker', 'Project Management'],
            link: 'https://github.com/UBCO-COSC-499-Summer-2023/PrairieLearn-Gamification'
        },
        {
            project: 'Chat Forum',
            description: 'A Reddit-inspired chat forum with threaded comments and live updating feeds. Required full stack development, using a XAMPP stack, SQL database, PHP backend, and JavaScript frontend utilizing AJAX.  This was designed for a web development course.',
            skills: ['JavaScript', 'PHP', 'HTML', 'MySQL', 'Project Management'],
            link: 'https://github.com/RylanRCox/360Project'
        },
        {
            project: 'Lat/Long to Road Mileage',
            description: 'A one-time run application that takes two CSVs of origins and destinations and outputs the road mileage between them into a new CSV. Built twice with two different APIs.  This was designed for the Virtual Care team at Interior Health.',
            skills: ['C#', '.Net'],
            link: 'Due to Privacy Reasons, this project is not available on GitHub.'
        },
        {
            project: 'ChatBot',
            description: 'A simple chatbot system with topical dialogue using POS tagging, synonym recognition, and Entity Recognition.  This was designed for a Software Engineering Course.',
            skills: ['Python', 'Project Management'],
            link: 'https://github.com/edouarde1/310-Group-Project'
        },
        {
            project: 'Learning Calendar',
            description: 'A calendar that uses machine learning techniques to determine a user’s preferences and set notifications accordingly.  This was designed for a machine learning course.',
            skills: ['Python', 'MATLAB'],
            link: 'https://github.com/RylanRCox/329-Learning-Calendar'
        },
        {
            project: 'Store WebPage',
            description: 'A webpage for a fictional store that was able to handle transactions, create user accounts, and has secure administrator access.  This was designed for a Databases course.',
            skills: ['Java', 'SQL', 'HTML'],
            link: 'https://github.com/LoganParker/COSC304-Group-Project'
        },
        {
            project: 'Game of Amazons Bot',
            description: 'A bot designed to play the Game of Amazons using a Monte Carlo algorithm. Placed fourth out of the twenty teams in the class.  This was designed for an Artificial Intelligence course.',
            skills: ['Java'],
            link: 'https://github.com/cosc-322-main-team/322GameOfAmazons'
        },
        {
            project: 'Bacteria Game',
            description: 'A small game designed to demonstrate an understanding of 3D and 2D graphics. This was designed for a Computer Graphics course.',
            skills: ['JavaScript'],
            link: 'https://github.com/jacobharding/414-Project-2'
        }
    ];

    return (
        <div id="Projects" class="w-full bg-slate-300 h-screen flex flex-col justify-between items-center text-center">
            <div class="flex-grow flex items-center justify-center">
                <div class="flex items-center text-center flex-col justify-center">
                    <h1 class="font-mono text-3xl font-extrabold text-white mt-5 transition-transform transform hover:scale-110">My Projects</h1>
                </div>
                <ProjectsGrid items = {myProjects}/>
            </div>
            <a href = "#ContactMe"><DownArrow /></a>
        </div>
    );
};

export default Projects;