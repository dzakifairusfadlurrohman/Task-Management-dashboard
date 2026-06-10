import { Task, TaskStatus } from "@/types/task";
import { countByStatus } from "@/utils/task-utils";

type TaskSummaryProps = {
  tasks: Task[];
};

const STATUS_CONFIG: { status: TaskStatus; modifier: string }[] = [
  { status: "Pending", modifier: "pending" },
  { status: "In Progress", modifier: "progress" },
  { status: "Completed", modifier: "completed" },
  { status: "Rejected", modifier: "rejected" },
];

export default function TaskSummary({ tasks }: TaskSummaryProps) {
  const counts = countByStatus(tasks);

  return (
    <section className="summary">
      <div className="summary__hero">
        <div>
          <p className="summary__eyebrow">Ringkasan</p>
          <h2 className="summary__title">Overview Task</h2>
        </div>
        <div className="summary__total-card">
          <span className="summary__total-label">Total</span>
          <span className="summary__total-value">{tasks.length}</span>
        </div>
      </div>

      <div className="summary__grid">
        {STATUS_CONFIG.map(({ status, modifier }) => (
          <div key={status} className={`summary__card summary__card--${modifier}`}>
            <span className="summary__card-label">{status}</span>
            <span className="summary__card-value">{counts[status]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
