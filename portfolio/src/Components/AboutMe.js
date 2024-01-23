import DownArrow from './DownArrow.js';
import SkillsGrid from './SkillsGrid.js';

const AboutMe = () => {
    const mySkills = [
        {skill: 'JavaScript', description: 'JavaScript the language I am most proficient in. I have used it for a handful of school projects, most notably my capstone project.'}, 
        {skill: 'C#', description: 'C# is a language I have used for some small side projects. I also used it for my co-op at Interior Health.'}, 
        {skill: 'Python', description: 'I used Python quite a bit for my Machine Learning and Data Science courses. It was the primary language I used for my learning calendar.'}, 
        {skill: 'Java', description: 'Java was the initial language I learned. I used it primarily in my first two years of university to learn the fundamentals.'}, 
        {skill: 'HTML', description: 'HTML appears in almost every project I have done. I am very familiar with it.'}, 
        {skill: 'CSS', description: 'CSS, similar to HTML, appears in almost every project I have done. I am very familiar with it.'}, 
        {skill: 'Node.js', description: 'Node.js is ht environment I am most familiar with. It is the environment used for my capstone project.'}, 
        {skill: 'React', description: 'React is a framework I have used for my personal projects. Typically I pair it with Tailwind CSS like I did for this website.'}, 
        {skill: 'PostgreSQL', description: 'I became familiar with PostgreSQL during my capstone project. Majority of the functionality of our project used Triggers which I developed using Postgres.'}, 
        {skill: 'MySQL', description: 'MySQL was the database I used for most of my projects during University. I have lots of experience with it.'}, 
        {skill: 'PHP', description: 'PHP was the backend language I used for my first web development course. We used it to create a simple website.'}, 
        {skill: 'R', description: 'When focusing on Data Science, R was the language I used. I used it for my Machine Learning course.'}
    ];
    
    return (
        <div id="AboutMe" className="w-full flex flex-col items-center text-center">
            <div className="flex-grow flex flex-col items-center justify-center text-lg md:text-2xl font-semibold text-white pt-10 md:pt-20">
                <div className="flex flex-col items-center justify-center bg-violet-400 w-full md:w-3/5 font-normal rounded-2xl drop-shadow-md p-5 m-5">
                    <div className="border-b-4 border-dashed">
                        <h1 className="text-4xl md:text-6xl font-extrabold">About Me</h1>
                    </div>
                    <p className="mt-5 transition-transform transform hover:scale-105">I'm from Kelowna, Canada and have recently finished my Bachelors of Science majoring in Computer Science at the University of British Columbia.</p>
                    <p className="mt-5 transition-transform transform hover:scale-105">I've done multiple projects for both school and for work during my co-op at Interior Health. I have a passion for human computer interaction and machine learning.</p>
                    <p className="mt-5 transition-transform transform hover:scale-105">I am familiar with multiple language but majority of my more recent work has been using PostgreSQL and Javascript.</p>
                </div>
                <SkillsGrid items={mySkills}/>
            </div>
            <a href="#Projects"><DownArrow /></a>
        </div>
    );
};

export default AboutMe;