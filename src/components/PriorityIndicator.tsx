import { TaskPriority } from "@/types/task";

type PriorityIndicatorProps = {
  priority: TaskPriority;
};

const PRIORITY_CLASS: Record<TaskPriority, string> = {
  Low: "priority priority--low",
  Medium: "priority priority--medium",
  High: "priority priority--high",
  Critical: "priority priority--critical",
};

export default function PriorityIndicator({ priority }: PriorityIndicatorProps) {
  return <span className={PRIORITY_CLASS[priority]}>{priority}</span>;
}
