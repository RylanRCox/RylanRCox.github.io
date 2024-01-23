import { useState } from 'react';

const SkillsGrid = ({items}) => {
    const [hoverSkill, setHoverSkill] = useState(null);
    const hoveredItem = items.find(item => item.skill === hoverSkill);
    
    return (
        <div className="relative flex items-center text-center flex-col justify-center bg-violet-400 rounded-2xl drop-shadow-md p-5 m-5">
            <div className="border-b-4 border-dashed mb-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">Languages, Frameworks, & Environments</h1>
            </div>
            <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {items.map((item, index) => (
                    <li 
                        key={index} 
                        className="flex-grow bg-zinc-300 bg-opacity-50 mx-2 py-2 px-2 rounded-xl drop-shadow-lg transition-transform transform hover:scale-110"
                        onMouseEnter={() => setHoverSkill(item.skill)}
                        onMouseLeave={() => setHoverSkill(null)}
                    >
                        {item.skill}
                    </li>
                ))}
            </ol>
            {hoverSkill && (
                <div className="absolute left-0 top-0 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-violet-400 text-lg rounded-xl drop-shadow-lg z-40">
                    {hoveredItem ? hoveredItem.description : ''}
                </div>
            )}
        </div>
    );
};
  
export default SkillsGrid;
