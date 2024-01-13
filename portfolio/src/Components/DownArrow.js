import { FaArrowDown } from 'react-icons/fa';

const downArrow = () => {
    return (
      <div className="text-7xl text-white flex mb-2 transition-transform transform hover:scale-110 transition-transform hover:-translate-y-2">
        <FaArrowDown />
      </div>
    );
  };
  
  export default downArrow;