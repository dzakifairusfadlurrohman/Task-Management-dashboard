import { SortOption } from "@/types/task";

type TaskSortProps = {
  value: SortOption;
  onChange: (sort: SortOption) => void;
};

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "dueDate", label: "Due Date terdekat" },
  { value: "createdAt", label: "Created Date terbaru" },
  { value: "priority", label: "Priority tertinggi" },
];

export default function TaskSort({ value, onChange }: TaskSortProps) {
  return (
    <div className="control">
      <label htmlFor="task-sort" className="control__label">
        Urutkan
      </label>
      <select
        id="task-sort"
        className="control__input"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
