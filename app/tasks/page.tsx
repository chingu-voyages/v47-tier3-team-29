'use client';
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Dialog from '@/components/Dialog';
import { createTask, getTasks } from '@/app/requests/tasks';
import { Task as TaskType } from '@prisma/client';
import Task from '@/components/Task';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { Loader2 } from 'lucide-react';

export default function Tasks() {
  const session = useSession();

  const [showCreateTaskDialog, setShowCreateTaskDialog] = React.useState(false);
  const [tasks, setTasks] = React.useState<TaskType[]>([]);
  const [loading, setLoading] = React.useState(false);

  const inputTaskName = useRef<HTMLInputElement>(null);
  const inputTaskDescription = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getTasks().then((data) => {
      setTasks(data.tasks);
    });
  }, []);

  const handleCreateTask = async () => {
    if (!inputTaskName.current?.value) {
      return;
    }

    if (!inputTaskDescription.current?.value) {
      return;
    }

    setLoading(true);

    const data = await createTask({
      title: inputTaskName.current?.value,
      description: inputTaskDescription.current?.value,
    });

    setTasks((prev) => [...prev, data.created]);

    setShowCreateTaskDialog(false);
    setLoading(false);
  };

  const handleOnSelect = (id: string) => {
    console.log(id);
  };

  const handleOnDelete = async (id: string) => {
    const deleted = await fetch(`/api/tasks`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    }).then((res) => res.json());

    if (deleted) setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-semibold text-3xl mb-10 text-slate-800">
        {session.data?.user?.name && `${session.data?.user?.name}'s`}{' '}
        <span className="text-indigo-600">Tasks</span>
      </div>
      <div className="flex flex-col gap-6">
        {tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
            onSelect={() => handleOnSelect(task.id)}
            onDelete={() => handleOnDelete(task.id)}
          />
        ))}
      </div>
      <div className="my-6">
        <Dialog
          open={showCreateTaskDialog}
          onOpenChange={setShowCreateTaskDialog}
          title="Create a new task"
          DialogTrigger={<Button>Create</Button>}
          Actions={
            <Button size="sm" onClick={handleCreateTask} disabled={loading}>
              Create{' '}
              {loading ? (
                <Loader2 size={16} className="ml-2 animate-spin" />
              ) : null}
            </Button>
          }
        >
          {<Input placeholder="Task name" ref={inputTaskName} />}
          {<Input placeholder="Task description" ref={inputTaskDescription} />}
        </Dialog>
      </div>
    </div>
  );
}
