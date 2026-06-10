import { TaskStatus } from "@/types/task";

type StatusBadgeProps = {
  status: TaskStatus;
};

const STATUS_CLASS: Record<TaskStatus, string> = {
  Pending: "badge badge--pending",
  "In Progress": "badge badge--progress",
  Completed: "badge badge--completed",
  Rejected: "badge badge--rejected",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return <span className={STATUS_CLASS[status]}>{status}</span>;
}
