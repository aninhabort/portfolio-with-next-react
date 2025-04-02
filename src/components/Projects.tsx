const Projects = () => {
  const projects = [
    { category: "UI Design", name: "Pokedex" },
    { category: "Web Development", name: "Pokeball Animated" },
    { category: "Mobile Development", name: "To-Do List App" },
    { category: "Web Development", name: "Ghibli Movies" },
    { category: "Web Development", name: "Ghibli Movies API" },
    { category: "Web Development", name: "Weather App" },
  ];

  return (
    <div className="flex flex-col bg-neutral-700 p-4 max-sm:px-8 mr-6 max-sm:m-6 rounded-lg shadow-md w-full max-sm:w-auto h-auto">
      <h1 className="font-bold text-3xl pb-2">Projects</h1>

      <div className="grid grid-cols-1 max-sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map(({ category, name }) => (
          <div
            key={name}
            className="flex flex-col justify-evenly gap-2 bg-gray-100 w-full max-sm:w-auto h-fit max-sm:h-auto p-5 rounded-lg shadow-sm"
          >
            <p className="text-gray-600">{category}</p>
            <p className="text-black">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

