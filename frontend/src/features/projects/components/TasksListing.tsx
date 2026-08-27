import { TaskCard } from "./TaskCard";

export const TasksListing = () => {
  return (
    <div className="flex flex-col gap-4">
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};