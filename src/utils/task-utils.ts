import { Task, TaskPriority, TaskStatus, SortOption } from "@/types/task";

const PRIORITY_ORDER: Record<TaskPriority, number> = {
  Critical: 4,
  High: 3,
  Medium: 2,
  Low: 1,
};

export function getTaskById(tasks: Task[], id: string): Task | undefined {
  return tasks.find((task) => task.id === id);
}

export function filterByStatus(
  tasks: Task[],
  status: TaskStatus | "All"
): Task[] {
  if (status === "All") return tasks;
  return tasks.filter((task) => task.status === status);
}

export function searchTasks(tasks: Task[], query: string): Task[] {
  const keyword = query.trim().toLowerCase();
  if (!keyword) return tasks;

  return tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(keyword) ||
      task.assignee.toLowerCase().includes(keyword)
  );
}

export function sortTasks(tasks: Task[], sortBy: SortOption): Task[] {
  const sorted = [...tasks];

  switch (sortBy) {
    case "dueDate":
      return sorted.sort(
        (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      );
    case "createdAt":
      return sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case "priority":
      return sorted.sort(
        (a, b) => PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority]
      );
    default:
      return sorted;
  }
}

export function applyTaskFilters(
  tasks: Task[],
  options: {
    status: TaskStatus | "All";
    search: string;
    sortBy: SortOption;
  }
): Task[] {
  const filtered = filterByStatus(tasks, options.status);
  const searched = searchTasks(filtered, options.search);
  return sortTasks(searched, options.sortBy);
}

export function countByStatus(tasks: Task[]): Record<TaskStatus, number> {
  return tasks.reduce(
    (acc, task) => {
      acc[task.status] += 1;
      return acc;
    },
    {
      Pending: 0,
      "In Progress": 0,
      Completed: 0,
      Rejected: 0,
    } as Record<TaskStatus, number>
  );
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
