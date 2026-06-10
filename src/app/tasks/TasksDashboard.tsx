"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { tasks as allTasks } from "@/data/tasks";
import { TaskStatus, SortOption } from "@/types/task";
import { applyTaskFilters } from "@/utils/task-utils";
import TaskSummary from "@/components/TaskSummary";
import TaskFilter from "@/components/TaskFilter";
import TaskSearch from "@/components/TaskSearch";
import TaskSort from "@/components/TaskSort";
import TaskCard from "@/components/TaskCard";

function LoadingSkeleton() {
  return (
    <div className="task-list">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton skeleton--sm" />
          <div className="skeleton skeleton--lg" />
          <div className="skeleton skeleton--md" />
        </div>
      ))}
    </div>
  );
}

export default function TasksDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<TaskStatus | "All">(
    (searchParams.get("status") as TaskStatus | "All") || "All"
  );
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [sortBy, setSortBy] = useState<SortOption>(
    (searchParams.get("sort") as SortOption) || "dueDate"
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (status !== "All") params.set("status", status);
    if (search) params.set("search", search);
    if (sortBy !== "dueDate") params.set("sort", sortBy);

    const query = params.toString();
    router.replace(query ? `/tasks?${query}` : "/tasks", { scroll: false });
  }, [status, search, sortBy, router]);

  const filteredTasks = useMemo(
    () => applyTaskFilters(allTasks, { status, search, sortBy }),
    [status, search, sortBy]
  );

  return (
    <div className="page">
      <header className="page-header">
        <p className="page-header__eyebrow">Dashboard</p>
        <h1 className="page-header__title">Task Management</h1>
        <p className="page-header__desc">
          Kelola dan pantau daftar task pekerjaan
        </p>
      </header>

      <TaskSummary tasks={allTasks} />

      <section className="panel">
        <div className="panel__header">
          <h2 className="panel__title">Daftar Task</h2>
          <span className="panel__count">
            {loading ? "..." : `${filteredTasks.length} task`}
          </span>
        </div>

        <div className="controls">
          <TaskFilter value={status} onChange={setStatus} />
          <TaskSearch value={search} onChange={setSearch} />
          <TaskSort value={sortBy} onChange={setSortBy} />
        </div>

        {loading ? (
          <LoadingSkeleton />
        ) : filteredTasks.length === 0 ? (
          <div className="state-message">
            <span className="state-message__icon">∅</span>
            <p>Tidak ada task yang sesuai dengan filter.</p>
          </div>
        ) : (
          <div className="task-list">
            {filteredTasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
