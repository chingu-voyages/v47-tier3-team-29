'use client';
import React, { useEffect } from 'react';
import { getTasks } from '@/app/requests/tasks';
import { Button } from '../ui/button';
import { Task } from '@prisma/client';

type TaskPickerProps = {
  selectedTasks: string[];
  onTaskSelect: (id: string) => void;
  onTaskUnselect: (id: string) => void;
};

const TaskPicker = ({
  onTaskSelect,
  onTaskUnselect,
  selectedTasks,
}: TaskPickerProps) => {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const fetchTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const isSelected = (id: string) => {
    return selectedTasks.includes(id);
  };

  const handleOnClick = (id: string) => {
    if (isSelected(id)) {
      onTaskUnselect(id);
    } else {
      onTaskSelect(id);
    }
  };

  return (
    <div>
      {tasks.map((task) => (
        <Button
          variant={isSelected(task.id) ? 'secondary' : 'outline'}
          size="sm"
          key={task.id}
          className="mr-1"
          onClick={() => handleOnClick(task.id)}
        >
          {task.title}
        </Button>
      ))}
    </div>
  );
};

export default TaskPicker;
