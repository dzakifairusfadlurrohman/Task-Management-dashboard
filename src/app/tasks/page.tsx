import { Suspense } from "react";
import TasksDashboard from "./TasksDashboard";

export default function TasksPage() {
  return (
    <Suspense fallback={<p className="state-message">Memuat halaman...</p>}>
      <TasksDashboard />
    </Suspense>
  );
}
