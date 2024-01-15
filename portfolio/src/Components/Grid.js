import { useState } from 'react';

const Grid = ({items}) => {
    const [hoverSkill, setHoverSkill] = useState(null);
    const hoveredItem = items.find(item => item.skill === hoverSkill);
    
    return (
        <div class = " relative flex items-center text-center flex-col justify-center bg-violet-400 w-3/5 rounded-2xl drop-shadow-md p-5 m-5">
            <div class = "border-b-4 border-dashed mb-10">
                <h1 class=" text-5xl font-extrabold">Languages, Frameworks, & Environments</h1>
            </div>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                {items.map((items, index) => (
                    <li 
                        key={index} 
                        className="flex-grow bg-zinc-300 bg-opacity-50 mx-2 py-2 px-2 rounded-xl drop-shadow-lg transition-transform transform hover:scale-110"
                        onMouseEnter={() => setHoverSkill(items.skill)}
                        onMouseLeave={() => setHoverSkill(null)}
                    >
                        {items.skill}
                    </li>
                ))}
            </ol>
            {hoverSkill && (
                <div className = "absolute left-full top-0 w-1/4 ml-4 bg-violet-400 p-4 text-lg rounded-xl drop-shadow-lg z-40">
                    {hoveredItem ? hoveredItem.description : ''}
                </div>
            )}
        </div>
    );
};
  
export default Grid;
  