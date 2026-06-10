import { NextResponse } from "next/server";
import { tasks } from "@/data/tasks";
import { getTaskById } from "@/utils/task-utils";

type RouteParams = {
  params: { id: string };
};

export async function GET(_request: Request, { params }: RouteParams) {
  const task = getTaskById(tasks, params.id);

  if (!task) {
    return NextResponse.json({ message: "Task tidak ditemukan" }, { status: 404 });
  }

  return NextResponse.json(task);
}
