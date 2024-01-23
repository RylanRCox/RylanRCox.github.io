const ProjectsGrid = ({items}) => {
    return (
        <div className="relative flex flex-col justify-center items-center">
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, index) => (
                    <li key={index} className="bg-violet-400 rounded-2xl drop-shadow-md p-5">
                        <h3 className="text-xl md:text-2xl text-center mb-4">{item.project}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="md:col-span-3 bg-zinc-300 bg-opacity-50 p-2 rounded-xl drop-shadow-lg">
                                <p className="text-sm text-left md:text-base font-normal">{item.description}</p>
                            </div>
                            <div className="md:col-span-1"> 
                                <ul className="flex flex-col items-start w-full">
                                    {item.skills.map((skill, skillIndex) => (
                                        <li key={skillIndex} className="bg-zinc-300 bg-opacity-50 my-1 px-2 rounded-xl drop-shadow-lg w-full">
                                            <p className="text-sm md:text-base font-normal">{skill}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div> 
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ProjectsGrid;
