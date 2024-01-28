import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Socials = () => {
    const iconSize = 36;
    const githubUrl = "https://github.com/RylanRCox"; 
    const linkedinUrl = "https://www.linkedin.com/in/rylancox/";

    return (
        <div className="fixed top-full left-0 md:top-1/2 transform md:-translate-y-1/2 z-50">
            <div className="bg-violet-500 text-white p-4 flex md:flex-col justify-center md:items-start w-full md:w-4/5">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="block mb-2 md:mb-2 md:mr-4">
                    <FaGithub size={iconSize} />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <FaLinkedin size={iconSize} />
                </a>
            </div>
        </div>
    );
};

export default Socials;
