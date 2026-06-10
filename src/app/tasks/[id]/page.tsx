import Link from "next/link";
import { tasks } from "@/data/tasks";
import { getTaskById, formatDate } from "@/utils/task-utils";
import StatusBadge from "@/components/StatusBadge";
import PriorityIndicator from "@/components/PriorityIndicator";

type TaskDetailPageProps = {
  params: { id: string };
};

export default function TaskDetailPage({ params }: TaskDetailPageProps) {
  const task = getTaskById(tasks, params.id);

  if (!task) {
    return (
      <div className="page page--centered">
        <div className="state-message state-message--not-found">
          <span className="state-message__icon">!</span>
          <h1>Task tidak ditemukan</h1>
          <p>ID <strong>{params.id}</strong> tidak ada di daftar task.</p>
          <Link href="/tasks" className="btn btn--primary">
            Kembali ke daftar task
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <header className="page-header">
        <p className="page-header__eyebrow">{task.id}</p>
        <h1 className="page-header__title">{task.title}</h1>
        <div className="page-header__badges">
          <StatusBadge status={task.status} />
          <PriorityIndicator priority={task.priority} />
        </div>
      </header>

      <section className="detail">
        <div className="detail__row">
          <span className="detail__label">Description</span>
          <span className="detail__value">{task.description}</span>
        </div>
        <div className="detail__row">
          <span className="detail__label">Status</span>
          <span className="detail__value">
            <StatusBadge status={task.status} />
          </span>
        </div>
        <div className="detail__row">
          <span className="detail__label">Priority</span>
          <span className="detail__value">
            <PriorityIndicator priority={task.priority} />
          </span>
        </div>
        <div className="detail__row">
          <span className="detail__label">Assignee</span>
          <span className="detail__value detail__value--highlight">
            {task.assignee}
          </span>
        </div>
        <div className="detail__row">
          <span className="detail__label">Created At</span>
          <span className="detail__value">{formatDate(task.createdAt)}</span>
        </div>
        <div className="detail__row">
          <span className="detail__label">Due Date</span>
          <span className="detail__value">{formatDate(task.dueDate)}</span>
        </div>
      </section>

      <Link href="/tasks" className="btn btn--secondary">
        ← Kembali ke daftar task
      </Link>
    </div>
  );
}
