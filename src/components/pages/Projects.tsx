import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PROJECTS_DATA } from "@/constants/projects";

const Projects = () => {
  return (
    <Card className="bg-neutral-700 border-neutral-600 w-full h-full">
      <CardHeader>
        <CardTitle className="text-3xl text-white">Projects</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS_DATA.map(({ category, name, url }) => (
            <Card
              key={name}
              className="bg-neutral-800 border-neutral-600 hover:border-purple-500 transition-colors"
            >
              <CardContent className="pt-6">
                <p className="text-gray-400 text-sm uppercase mb-2">{category}</p>
                <p className="text-white font-semibold mb-3">{name}</p>
                <Button variant="link" className="text-purple-400 hover:text-purple-300 p-0 h-auto" asChild>
                  <a href={url} target="_blank">Link of the project</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
