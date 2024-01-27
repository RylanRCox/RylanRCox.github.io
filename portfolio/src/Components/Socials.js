import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Socials = () => {
    return (
        <div className="bg-violet-500 text-white p-4 fixed w-full flex justify-between items-center font-semibold text-xl z-50">
            <FaGithub />
            <FaLinkedin />
        </div>
    );
};

export default Socials;
