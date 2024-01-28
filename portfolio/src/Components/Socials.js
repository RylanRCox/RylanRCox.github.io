import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Socials = () => {
    // Set a size for the icons (e.g., 24 for larger size)
    const iconSize = 36;

    return (
        <div className="flex flex-col justify-between bg-violet-500 text-white p-4 fixed w-20 left-0 top-1/2 transform -translate-y-1/2 font-semibold text-xl z-50">
            <FaGithub size={iconSize} />
            <FaLinkedin size={iconSize} />
        </div>
    );
};

export default Socials;
