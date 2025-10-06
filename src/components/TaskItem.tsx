interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  onToggle: () => void;
  onEdit: (id: string, title: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({
  id,
  title,
  completed,
  onToggle,
  onEdit,
  onDelete,
}: TaskItemProps) {
  return (
    <li
      className={`p-3 rounded-lg border flex justify-between items-center transition ${
        completed
          ? "bg-green-50 border-green-200 line-through text-gray-500"
          : "bg-blue-50 border-blue-200 hover:bg-blue-100"
      }`}
    >
      <span onClick={onToggle} className="cursor-pointer flex-1">
        {title}
      </span>

      <div className="flex gap-2">
        <button
          onClick={() => {
            const newTitle = prompt("Edit step title:", title);
            if (newTitle && newTitle.trim() !== "") onEdit(id, newTitle.trim());
          }}
          className="text-xs text-blue-600 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="text-xs text-red-600 hover:underline"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
