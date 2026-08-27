import { ProjectCard } from "./ProjectCard";

export const ProjectListing = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};