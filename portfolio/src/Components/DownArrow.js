import { FaArrowDown } from 'react-icons/fa';

const DownArrow = () => {
    return (
        <div className="flex justify-center items-center my-2 transition-transform transform hover:scale-110 hover:-translate-y-2">
            <FaArrowDown className="text-4xl md:text-7xl text-violet-400" />
        </div>
    );
};

export default DownArrow;
