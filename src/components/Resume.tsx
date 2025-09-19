const education = [
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
];

const experience = [
  {
    year: "Dec 2023 – Dec 2024",
    area: "Internship in Frontend Development",
    company: "Conta Café",
  },
  {
    year: "Jan 2025 – Jun 2025",
    area: "UX/UI Analyst",
    company: "Flix E-commerce",
  },
]

const Resume = () => {
  return (
    <div className="flex flex-col bg-neutral-700 p-4 max-sm:px-8 rounded-lg shadow-md w-full max-sm:w-auto h-auto">
      <h1 className="font-bold text-3xl pb-2">Resume</h1>

      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
        {/* Educação */}
        <div className="w-full">
          <h2 className="font-medium text-2xl pb-2.5">Education</h2>

          <div className="flex flex-col gap-4">
            {education.map(({ year, course, school }) => (
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
          {experience.map(({ year, area, company }) => (
              <div
                key={area}
                className="flex flex-col gap-1 bg-gray-200 w-full p-5 rounded-lg"
              >
                <p className="text-gray-400">{year}</p>
                <p className="text-black">{area}</p>
                <p className="text-black">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
