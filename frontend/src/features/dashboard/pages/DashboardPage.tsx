import { ProjectListing } from "../../projects/components/ProjectListing"
import { StatsCard } from "../components/StatsCard";

export const DashboardPage = () => {
  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="border-b border-slate-800 pb-6">
        <h2 className="dashboard-title">Overview</h2>
        <p className="text-sm text-slate-400 mt-1">
          Welcome back! Here is a summary of your workspace activities and active projects.
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>

      {/* All Projects Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-100 tracking-tight">Recents Projects</h3>
          <span className="text-xs font-medium text-slate-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
            All Projects
          </span>
        </div>
        <ProjectListing />
      </div>
    </div>
  );
};