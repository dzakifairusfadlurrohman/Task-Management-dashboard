import Link from "next/link";
import { Task } from "@/types/task";
import { formatDate } from "@/utils/task-utils";
import StatusBadge from "./StatusBadge";
import PriorityIndicator from "./PriorityIndicator";

type TaskCardProps = {
  task: Task;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <article className="task-card">
      <div className="task-card__top">
        <span className="task-card__id">{task.id}</span>
        <div className="task-card__badges">
          <StatusBadge status={task.status} />
          <PriorityIndicator priority={task.priority} />
        </div>
      </div>

      <h3 className="task-card__title">{task.title}</h3>
      <p className="task-card__description">{task.description}</p>

      <div className="task-card__footer">
        <div className="task-card__assignee">
          <span className="task-card__avatar">{getInitials(task.assignee)}</span>
          <div>
            <span className="task-card__assignee-label">Assignee</span>
            <span className="task-card__assignee-name">{task.assignee}</span>
          </div>
        </div>

        <div className="task-card__due">
          <span className="task-card__due-label">Due Date</span>
          <span className="task-card__due-date">{formatDate(task.dueDate)}</span>
        </div>
      </div>

      <Link href={`/tasks/${task.id}`} className="btn btn--outline btn--block">
        Lihat Detail
      </Link>
    </article>
  );
}
