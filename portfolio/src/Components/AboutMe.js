import DownArrow from './DownArrow.js';

const AboutMe = () => {
    return (
        <div id="AboutMe" class="w-full h-screen flex flex-col justify-between items-center text-center">
            <div class="flex-grow flex items-center justify-center">
                <div class="flex items-center text-center flex-col justify-center">
                    <div>
                        <h1 class="font-mono text-6xl font-extrabold text-white mt-5 transition-transform transform hover:scale-110">About Me</h1>
                    </div>
                    <div class = "w-1/2">
                        <p class="font-mono text-2xl font-semibold text-white mt-5 transition-transform transform hover:scale-110">I'm from Kelowna, Canada and have recently finished my Bachelors of Science majoring in Computer Science at the University of British Columbia. </p>
                    </div>
                    <div class = "w-1/2">
                        <p class="font-mono text-2xl font-semibold text-white mt-5 transition-transform transform hover:scale-110">I've done multiple projects for both school and for work during my co-op at Interior Health. I have a passion for human computer interaction and machine learning. </p>
                    </div>
                    <div class = "w-1/2">
                        <p class="font-mono text-2xl font-semibold text-white mt-5 transition-transform transform hover:scale-110">I am familiar with multiple language but majority of my more recent work has been using POSTGRES and Javascript. </p>
                    </div>
                </div>
            </div>
            <a href = "#Projects"><DownArrow /></a>
        </div>
    );
};

export default AboutMe;