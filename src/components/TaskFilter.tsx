import { TaskStatus } from "@/types/task";

type TaskFilterProps = {
  value: TaskStatus | "All";
  onChange: (status: TaskStatus | "All") => void;
};

const FILTER_OPTIONS: Array<TaskStatus | "All"> = [
  "All",
  "Pending",
  "In Progress",
  "Completed",
  "Rejected",
];

export default function TaskFilter({ value, onChange }: TaskFilterProps) {
  return (
    <div className="control">
      <label htmlFor="task-filter" className="control__label">
        Filter Status
      </label>
      <select
        id="task-filter"
        className="control__input"
        value={value}
        onChange={(e) => onChange(e.target.value as TaskStatus | "All")}
      >
        {FILTER_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
