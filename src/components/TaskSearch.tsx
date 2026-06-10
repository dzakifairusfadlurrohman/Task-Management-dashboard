type TaskSearchProps = {
  value: string;
  onChange: (query: string) => void;
};

export default function TaskSearch({ value, onChange }: TaskSearchProps) {
  return (
    <div className="control">
      <label htmlFor="task-search" className="control__label">
        Cari Task
      </label>
      <input
        id="task-search"
        type="search"
        className="control__input"
        placeholder="Cari berdasarkan title atau assignee..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
