const SkillsGrid = ({items}) => {
    
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
                    >
                        {item.skill}
                    </li>
                ))}
            </ol>
        </div>
    );
};
  
export default SkillsGrid;
