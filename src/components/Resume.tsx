const Resume = () => {
  return (
    <div className="flex flex-col bg-neutral-700 p-6 mr-6 rounded-lg w-full h-auto">
      <h1 className="font-bold text-3xl pb-2">Resume</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Educação */}
        <div className="w-full">
          <h2 className="font-medium text-2xl pb-2.5">Education</h2>

          <div className="flex flex-col gap-4">
            {[
              {
                year: "2017 – 2021",
                course: "Architecture and Urbanism",
                school: "Faesa",
              },
              {
                year: "2022 – 2023",
                course: "Web Development",
                school: "Trybe",
              },
              {
                year: "2023 – at the moment",
                course: "Full Stack Web Development",
                school: "PUC Minas",
              },
            ].map(({ year, course, school }) => (
              <div
                key={course}
                className="flex flex-col gap-1 bg-gray-200 w-full p-5 rounded-lg"
              >
                <p className="text-gray-400">{year}</p>
                <p className="text-black">{course}</p>
                <p className="text-black">{school}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experiência */}
        <div className="w-full">
          <h2 className="font-medium text-2xl pb-2.5">Experience</h2>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1 bg-gray-200 w-full p-5 rounded-lg">
              <p className="text-gray-400">2023 – 2024</p>
              <p className="text-black">Internship in Frontend Development</p>
              <p className="text-black">Conta Café</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
