"use client";

import { useState } from "react";
import TaskForm from "@/components/TaskForm";
import { TaskFormData, TaskFormErrors } from "@/types/task";
import { formatDate } from "@/utils/task-utils";
import PriorityIndicator from "@/components/PriorityIndicator";

const INITIAL_FORM: TaskFormData = {
  title: "",
  description: "",
  assignee: "",
  priority: "Medium",
  dueDate: "",
};

export default function NewTaskPage() {
  const [formData, setFormData] = useState<TaskFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<TaskFormErrors>({});
  const [submitted, setSubmitted] = useState<TaskFormData | null>(null);

  function handleChange(field: keyof TaskFormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof TaskFormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function validate(): TaskFormErrors {
    const newErrors: TaskFormErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title wajib diisi";
    }
    if (!formData.assignee.trim()) {
      newErrors.assignee = "Assignee wajib diisi";
    }
    if (!formData.dueDate) {
      newErrors.dueDate = "Due Date wajib diisi";
    }

    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(null);
      return;
    }

    setSubmitted(formData);
    setErrors({});
  }

  return (
    <div className="page page--form">
      <header className="page-header">
        <p className="page-header__eyebrow">Form</p>
        <h1 className="page-header__title">Tambah Task Baru</h1>
        <p className="page-header__desc">
          Isi form di bawah untuk menambahkan task
        </p>
      </header>

      <div className="form-layout">
        <TaskForm
          data={formData}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        {submitted && (
          <section className="submitted-summary">
            <div className="submitted-summary__header">
              <span className="submitted-summary__check">✓</span>
              <div>
                <h2>Ringkasan Data Input</h2>
                <p>Data berhasil divalidasi dan siap ditinjau.</p>
              </div>
            </div>

            <dl className="submitted-summary__grid">
              <div className="submitted-summary__item">
                <dt>Title</dt>
                <dd>{submitted.title}</dd>
              </div>
              <div className="submitted-summary__item">
                <dt>Assignee</dt>
                <dd>{submitted.assignee}</dd>
              </div>
              <div className="submitted-summary__item submitted-summary__item--full">
                <dt>Description</dt>
                <dd>{submitted.description || "-"}</dd>
              </div>
              <div className="submitted-summary__item">
                <dt>Priority</dt>
                <dd>
                  <PriorityIndicator priority={submitted.priority} />
                </dd>
              </div>
              <div className="submitted-summary__item">
                <dt>Due Date</dt>
                <dd>{formatDate(submitted.dueDate)}</dd>
              </div>
            </dl>
          </section>
        )}
      </div>
    </div>
  );
}
