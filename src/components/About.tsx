import { CodeSimple, DeviceMobile, Palette } from "@phosphor-icons/react";

const About = () => {
  return (
    <div className="flex flex-col justify-evenly bg-neutral-700 p-2 max-sm:px-8 rounded-lg shadow-md w-full max-sm:w-auto h-auto">
      {/* About Me */}
      <div className="p-2.5">
        <h1 className="font-bold text-3xl">About me</h1>
        <p className="py-2.5">
          Hey, I&apos;m Ana Carolina! I&apos;m a Frontend Developer & Aspiring UX/UI
          Designer with a solid background in creating responsive web
          applications using React.js and TypeScript. I am transitioning my
          career from Architecture and Urbanism to technology, bringing with me
          a strong foundation in project management and problem-solving.
        </p>
        <p className="py-3">
          My professional experience includes analyzing user behavior to improve
          usability and conversion rates, as well as developing scalable and
          user-friendly interfaces. I am passionate about creating products that
          are not only technically robust but also offer an exceptional user
          experience.
        </p>
      </div>

      {/* What I Do */}
      <div className="p-2.5 ">
        <h2 className="font-medium text-2xl">What I do</h2>

        <div className="flex flex-row max-sm:flex-col gap-3 py-2.5">
          {[
            { icon: <CodeSimple size={24} />, text: "Web Development" },
            { icon: <DeviceMobile size={24} />, text: "Mobile Development" },
            { icon: <Palette size={24} />, text: "UI Design" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2.5 bg-gray-200 w-fit p-5 rounded-lg"
            >
              <span className="text-purple-800">{icon}</span>
              <p className="text-black">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="p-2.5">
        <h2 className="font-medium text-2xl">Skills</h2>

        <div className="flex flex-wrap gap-3 py-2.5">
          {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Figma"].map(
            (skill) => (
              <div
                key={skill}
                className="bg-gray-200 text-black w-fit px-4 py-2 rounded-lg"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
