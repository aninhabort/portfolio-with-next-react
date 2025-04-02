const Projects = () => {
  const projects = [
    { category: "UI Design", name: "Pokedex", url: "https://www.figma.com/community/file/1480973290003426198" },
    { category: "Web Development", name: "Pokeball Animated", url: "https://github.com/aninhabort/pokeball-animated" },
    { category: "Mobile Development", name: "To-Do List App", url: "https://github.com/aninhabort/todo-list-app" },
    { category: "Web Development", name: "Ghibli Movies", url: "https://github.com/aninhabort/ghibli-movies" },
    { category: "Web Development", name: "Ghibli Movies API", url: "https://github.com/aninhabort/ghibli-movies-api" },
    { category: "Web Development", name: "Weather App", url: "https://github.com/aninhabort/weather-app" },
  ];

  return (
    <div className="flex flex-col bg-neutral-700 p-4 max-sm:px-8 mr-6 max-sm:m-6 rounded-lg shadow-md w-full max-sm:w-auto h-auto">
      <h1 className="font-bold text-3xl pb-2">Projects</h1>

      <div className="grid grid-cols-1 max-sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map(({ category, name, url }) => (
          <div
            key={name}
            className="flex flex-col justify-evenly gap-2 bg-gray-100 w-full max-sm:w-auto h-fit max-sm:h-auto p-5 rounded-lg shadow-sm"
          >
            <p className="text-gray-600">{category}</p>
            <p className="text-black">{name}</p>
            <a className="text-purple-600 underline" href={url}>Link of the project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
