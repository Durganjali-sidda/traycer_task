import { useState } from "react";
import { usePlanStore } from "../store/planStore";

export default function TaskList() {
  const [input, setInput] = useState("");
  const { tasks, addTask, selectTask, selectedTaskId } = usePlanStore();

  const handleAdd = () => {
    if (!input.trim()) return;
    addTask(input.trim());
    setInput("");
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
        🧾 Tasks
      </h2>

      <div className="flex mb-3 gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task..."
          className="flex-1 px-3 py-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-gray-400 text-sm">No tasks yet</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              onClick={() => selectTask(task.id)}
              className={`p-3 rounded-lg cursor-pointer border transition ${
                selectedTaskId === task.id
                  ? "bg-blue-50 border-blue-300"
                  : "bg-gray-50 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {task.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
