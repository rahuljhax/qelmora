import { useNavigate } from "react-router-dom";
import { ProjectListing } from "../components/ProjectListing";

export const ProjectsPage = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="dashboard-title">Projects</h2>
        <button onClick={() => navigate('/dashboard/projects/create')} className="px-3 py-2 bg-blue-500 cursor-pointer text-white rounded-xl">Create Project</button>
      </div>
      <ProjectListing />
    </div>
  );
};