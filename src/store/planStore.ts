import { create } from "zustand";
import { nanoid } from "nanoid";

interface Step {
  id: string;
  title: string;
  completed: boolean;
}

interface Task {
  id: string;
  title: string;
  steps: Step[];
}

interface PlanStore {
  tasks: Task[];
  selectedTaskId: string | null;

  addTask: (title: string) => void;
  selectTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;

  addStep: (taskId: string, title: string) => void;
  toggleStep: (taskId: string, stepId: string) => void;
  deleteStep: (taskId: string, stepId: string) => void;
}

export const usePlanStore = create<PlanStore>((set) => ({
  tasks: [],
  selectedTaskId: null,

  // Add a new task
  addTask: (title) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        { id: nanoid(), title, steps: [] },
      ],
    })),

  // Select a task (for PlanBoard and Details)
  selectTask: (taskId) =>
    set(() => ({
      selectedTaskId: taskId,
    })),

  // Delete a task entirely
  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== taskId),
      selectedTaskId:
        state.selectedTaskId === taskId ? null : state.selectedTaskId,
    })),

  // Add a planning step to a task
  addStep: (taskId, title) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === taskId
          ? {
              ...t,
              steps: [
                ...t.steps,
                { id: nanoid(), title, completed: false },
              ],
            }
          : t
      ),
    })),

  // Toggle a step’s completion status
  toggleStep: (taskId, stepId) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === taskId
          ? {
              ...t,
              steps: t.steps.map((s) =>
                s.id === stepId
                  ? { ...s, completed: !s.completed }
                  : s
              ),
            }
          : t
      ),
    })),

  // Delete a specific step from a task
  deleteStep: (taskId, stepId) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === taskId
          ? {
              ...t,
              steps: t.steps.filter((s) => s.id !== stepId),
            }
          : t
      ),
    })),
}));
