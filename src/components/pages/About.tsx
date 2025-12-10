import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES_DATA, SKILLS_DATA } from "@/constants/about";

const About = () => {
  return (
    <Card className="bg-neutral-700 border-neutral-600 w-full h-full">
      <CardHeader>
        <CardTitle className="text-3xl text-white">About me</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <p className="text-gray-300">
            Hey, I&apos;m Ana Carolina! I&apos;m a Frontend Developer & Aspiring UX/UI
            Designer with a solid background in creating responsive web
            applications using React.js and TypeScript. I am transitioning my
            career from Architecture and Urbanism to technology, bringing with me
            a strong foundation in project management and problem-solving.
          </p>
          <p className="mt-4 text-gray-300">
            My professional experience includes analyzing user behavior to improve
            usability and conversion rates, as well as developing scalable and
            user-friendly interfaces. I am passionate about creating products that
            are not only technically robust but also offer an exceptional user
            experience.
          </p>
        </div>

        <div>
          <h2 className="font-medium text-2xl text-white mb-3">What I do</h2>
          <div className="flex flex-col sm:flex-row gap-3">
            {SERVICES_DATA.map(({ icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2.5 bg-neutral-800 w-fit p-5 rounded-lg border border-neutral-600"
              >
                <span className="text-purple-400">{icon}</span>
                <p className="text-white">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-medium text-2xl text-white mb-3">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {SKILLS_DATA.map((skill) => (
              <div
                key={skill}
                className="bg-neutral-800 text-white w-fit px-4 py-2 rounded-lg border border-neutral-600"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default About;
