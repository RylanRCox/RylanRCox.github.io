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
            description: 'A Reddit-inspired chat forum with threaded comments and live updating feeds. Required full stack development, using a XAMPP stack, SQL database, PHP backend, and JavaScript frontend utilizing AJAX.  This was designed for a Web Development course.',
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
            description: 'A calendar that uses machine learning techniques to determine a user’s preferences and set notifications accordingly.  This was designed for a Machine Learning course.',
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
        <div id="Projects" className="w-full bg-slate-100 flex flex-col items-center text-center">
            <div className="w-full md:w-11/12 flex-grow flex flex-col items-center justify-center text-xl md:text-2xl font-semibold text-white pt-12 pb-12 md:pt-24">
                <div className="bg-violet-400 rounded-2xl drop-shadow-md p-5 m-5">
                    <div className="border-b-4 border-dashed pb-1">
                        <h1 className="text-4xl md:text-6xl font-extrabold">My Projects</h1>
                    </div>
                </div>
                <ProjectsGrid items={myProjects}/>
            </div>
        </div>
    );
};

export default Projects;