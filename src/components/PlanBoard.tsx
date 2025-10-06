import { useState } from "react";
import { usePlanStore } from "../store/planStore";
import StepItem from "./StepItem";

export default function PlanBoard() {
  const [input, setInput] = useState("");
  const { tasks, selectedTaskId, addStep, toggleStep, deleteStep } = usePlanStore();

  const selectedTask = tasks.find((t) => t.id === selectedTaskId);

  const handleAdd = () => {
    if (!selectedTask || !input.trim()) return;
    addStep(selectedTask.id, input.trim());
    setInput("");
  };

  if (!selectedTask)
    return (
      <div className="p-6 bg-white rounded-2xl shadow border text-center text-gray-400">
        Select a task from left to add steps
      </div>
    );

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
        🪄 {selectedTask.title}
      </h2>

      <div className="flex mb-3 gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add planning step..."
          className="flex-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      {selectedTask.steps.length === 0 ? (
        <p className="text-gray-400 text-sm text-center">No steps added yet</p>
      ) : (
        <ul className="space-y-2">
          {selectedTask.steps.map((step) => (
            <StepItem
              key={step.id}
              step={step}
              onToggle={() => toggleStep(selectedTask.id, step.id)}
              onDelete={() => deleteStep(selectedTask.id, step.id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
