export type TaskStatus = "Pending" | "In Progress" | "Completed" | "Rejected";

export type TaskPriority = "Low" | "Medium" | "High" | "Critical";

export type Task = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: string;
  createdAt: string;
  dueDate: string;
};

export type TaskFormData = {
  title: string;
  description: string;
  assignee: string;
  priority: TaskPriority;
  dueDate: string;
};

export type TaskFormErrors = Partial<Record<keyof Pick<TaskFormData, "title" | "assignee" | "dueDate">, string>>;

export type SortOption = "dueDate" | "createdAt" | "priority";

export const TASK_STATUSES: TaskStatus[] = [
  "Pending",
  "In Progress",
  "Completed",
  "Rejected",
];

export const TASK_PRIORITIES: TaskPriority[] = [
  "Low",
  "Medium",
  "High",
  "Critical",
];
