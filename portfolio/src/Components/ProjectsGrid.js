

const ProjectsGrid = ({items}) => {
    
    return (
        <div class = "relative flex flex-col justify-center items-center">
            <ol class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((items, index) => (
                    <li key={index} class="flex flex-col bg-violet-400 rounded-2xl drop-shadow-md px-1 p-5">
                        <h3 class="text-2xl text-center mb-2">{items.project}</h3>
                        <div class="w-full h-full flex flex-row justify-between">
                            <div class="flex-1 flex flex-col justify-start text-start bg-zinc-300 bg-opacity-50 mx-2 p-2 rounded-xl drop-shadow-lg"> 
                                    <p class="text-base font-normal text-start">{items.description}</p>
                            </div>
                            <div class="flex-2 w-1/4 ml-1"> 
                                <ul class="flex flex-col items-end w-full">
                                    {items.skills.map((skill, index) => (
                                        <li key={index} class="bg-zinc-300 bg-opacity-50 mx-2 my-1 px-2 rounded-xl drop-shadow-lg w-full">
                                            <p class="text-base font-normal">{skill}</p>
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
  