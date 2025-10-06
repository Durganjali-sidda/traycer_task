interface StepItemProps {
  step: { id: string; title: string; completed: boolean };
  onToggle: () => void;
  onDelete: () => void;
}

export default function StepItem({ step, onToggle, onDelete }: StepItemProps) {
  return (
    <li
      onClick={onToggle}
      className={`p-3 rounded-lg flex justify-between items-center cursor-pointer border transition ${
        step.completed
          ? "bg-green-50 border-green-200 line-through text-gray-500"
          : "bg-blue-50 border-blue-200 hover:bg-blue-100"
      }`}
    >
      <span>{step.title}</span>
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span>{step.completed ? "Done ✅" : "Pending ⏳"}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="text-red-500 hover:text-red-700"
        >
          🗑
        </button>
      </div>
    </li>
  );
}
