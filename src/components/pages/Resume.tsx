import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EDUCATION_DATA, EXPERIENCE_DATA } from "@/constants/resume";

const Resume = () => {
  return (
    <Card className="bg-neutral-700 border-neutral-600 w-full h-full">
      <CardHeader>
        <CardTitle className="text-3xl text-white">Resume</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Educação */}
        <div className="w-full">
          <h2 className="font-medium text-2xl pb-2.5">Education</h2>

          <div className="flex flex-col gap-4">
            {EDUCATION_DATA.map(({ year, course, school }) => (
              <div
                key={course}
                className="flex flex-col gap-1 bg-neutral-800 w-full p-5 rounded-lg border border-neutral-600"
              >
                <p className="text-gray-400 text-sm">{year}</p>
                <p className="text-white font-semibold">{course}</p>
                <p className="text-gray-300">{school}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experiência */}
        <div className="w-full">
          <h2 className="font-medium text-2xl pb-2.5">Experience</h2>

          <div className="flex flex-col gap-4">
          {EXPERIENCE_DATA.map(({ year, area, company }) => (
              <div
                key={area}
                className="flex flex-col gap-1 bg-neutral-800 w-full p-5 rounded-lg border border-neutral-600"
              >
                <p className="text-gray-400 text-sm">{year}</p>
                <p className="text-white font-semibold">{area}</p>
                <p className="text-gray-300">{company}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Resume;
