import TaskList from "../components/TaskList";
import PlanBoard from "../components/PlanBoard";
import TaskDetails from "../components/TaskDetails";

export default function PlanningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <TaskList />
        <PlanBoard />
        <TaskDetails />
      </div>
    </div>
  );
}
