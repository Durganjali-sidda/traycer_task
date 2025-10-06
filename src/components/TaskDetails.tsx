import { usePlanStore } from "../store/planStore";

export default function TaskDetails() {
  const { tasks, selectedTaskId } = usePlanStore();
  const selectedTask = tasks.find((t) => t.id === selectedTaskId);

  if (!selectedTask)
    return (
      <div className="p-6 bg-white rounded-2xl shadow border text-center text-gray-400">
        Select a task to see details
      </div>
    );

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">🔍 Step Details</h2>
      <p className="text-sm text-gray-600 mb-4">
        This area will soon show detailed step info, edit options, and AI
        suggestions for {selectedTask.title}.
      </p>
      <div className="text-gray-400 text-sm italic">
        ✨ “Everything can be automated with AI, but for now we build it manually.”
      </div>
    </div>
  );
}
