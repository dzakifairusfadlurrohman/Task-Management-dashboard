import { TaskFormData, TaskFormErrors, TASK_PRIORITIES } from "@/types/task";

type TaskFormProps = {
  data: TaskFormData;
  errors: TaskFormErrors;
  onChange: (field: keyof TaskFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function TaskForm({
  data,
  errors,
  onChange,
  onSubmit,
}: TaskFormProps) {
  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__header">
        <h2 className="form__title">Data Task</h2>
        <p className="form__subtitle">Lengkapi informasi task di bawah ini</p>
      </div>

      <div className="form__field">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Masukkan judul task"
          value={data.title}
          onChange={(e) => onChange("title", e.target.value)}
          className={errors.title ? "form__input--error" : ""}
        />
        {errors.title && <span className="form__error">{errors.title}</span>}
      </div>

      <div className="form__field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={4}
          placeholder="Deskripsi task (opsional)"
          value={data.description}
          onChange={(e) => onChange("description", e.target.value)}
        />
      </div>

      <div className="form__row">
        <div className="form__field">
          <label htmlFor="assignee">Assignee</label>
          <input
            id="assignee"
            type="text"
            placeholder="Nama penanggung jawab"
            value={data.assignee}
            onChange={(e) => onChange("assignee", e.target.value)}
            className={errors.assignee ? "form__input--error" : ""}
          />
          {errors.assignee && (
            <span className="form__error">{errors.assignee}</span>
          )}
        </div>

        <div className="form__field">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            value={data.priority}
            onChange={(e) => onChange("priority", e.target.value)}
          >
            {TASK_PRIORITIES.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form__field">
        <label htmlFor="dueDate">Due Date</label>
        <input
          id="dueDate"
          type="date"
          value={data.dueDate}
          onChange={(e) => onChange("dueDate", e.target.value)}
          className={errors.dueDate ? "form__input--error" : ""}
        />
        {errors.dueDate && (
          <span className="form__error">{errors.dueDate}</span>
        )}
      </div>

      <button type="submit" className="btn btn--primary btn--block">
        Submit Task
      </button>
    </form>
  );
}
