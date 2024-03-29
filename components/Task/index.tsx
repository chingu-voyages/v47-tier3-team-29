import React from 'react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Task as TaskType } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

type TaskProps = Pick<TaskType, 'title' | 'description' | 'status'> & {
  onSelect?: () => void;
  onDelete?: () => void;
};

const Task = ({
  title,
  description,
  status,
  onSelect,
  onDelete,
}: TaskProps) => {
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onSelect?.();
  };

  const handleOnDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDelete?.();
  };
  return (
    <Card
      className="min-w-[250px] bg-slate-50 hover:bg-slate-100 cursor-pointer relative transition-colors duration-300 ease-in-out"
      onClick={handleOnClick}
    >
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 hover:text-red-600 transition-colors duration-500 ease-in-out"
        onClick={handleOnDelete}
      >
        <X size={16} />
      </Button>
      <CardHeader className="mr-6">
        <CardTitle className="flex justify-between items-start">
          <div>{title}</div>
        </CardTitle>
        <CardDescription>
          <div className="flex justify-between">
            {description}
            <Badge className="bg-indigo-600">{status}</Badge>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default Task;
