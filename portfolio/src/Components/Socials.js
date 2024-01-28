import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Socials = () => {
    const iconSize = 36;
    const githubUrl = "https://github.com/RylanRCox"; // Replace with your GitHub URL
    const linkedinUrl = "https://www.linkedin.com/in/rylancox/"; // Replace with your LinkedIn URL

    return (
        <div className="flex flex-col justify-between bg-violet-500 text-white p-4 fixed left-0 top-1/2 transform -translate-y-1/2 font-semibold text-xl z-50">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="mb-4">
                <FaGithub size={iconSize} />
            </a>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={iconSize} />
            </a>
        </div>
    );
};

export default Socials;
