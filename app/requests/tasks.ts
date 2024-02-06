import { Task } from '@prisma/client';

async function createTask(
  task: Pick<Task, 'title' | 'description'>
): Promise<{ created: Task }> {
  const created = await fetch('/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      task: {
        title: task.title,
        description: task.description,
      },
    }),
  });

  return created.json();
}

async function getTasks(): Promise<{ tasks: Task[] }> {
  const response = await fetch('/api/tasks');

  return response.json();
}

async function deleteTask(id: string): Promise<{ deleted: Task }> {
  const deleted = await fetch(`/api/tasks/${id}`, {
    method: 'DELETE',
  });

  return deleted.json();
}

export { createTask, getTasks, deleteTask };
