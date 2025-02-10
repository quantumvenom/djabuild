import { useQuery } from "@tanstack/react-query";
import { Heading } from "@/components/ui/heading";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { type Project } from "@shared/schema";

export default function Portfolio() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  return (
    <div className="min-h-screen pt-16">
      <section className="bg-secondary py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Heading
            title="Our Portfolio"
            description="Showcasing our finest construction projects"
            centered
            className="text-white mb-8"
          />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="aspect-video animate-pulse bg-gray-200" />
                  <CardContent className="p-6">
                    <div className="h-6 w-2/3 bg-gray-200 rounded animate-pulse mb-4" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-2" />
                    <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects?.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    <span className="inline-block mt-4 text-sm font-medium text-primary">
                      {project.category}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
