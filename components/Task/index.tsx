import React, { MouseEventHandler } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Task as TaskType } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, XCircle } from 'lucide-react';

type TaskProps = Pick<TaskType, 'title' | 'description' | 'status'> & {
  onSelect: () => void;
  onDelete: () => void;
};

const Task = ({
  title,
  description,
  status,
  onSelect,
  onDelete,
}: TaskProps) => {
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onSelect();
  };

  const handleOnDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDelete();
  };
  return (
    <Card
      className="w-[350px] hover:bg-slate-100 cursor-pointer relative transition-colors duration-300 ease-in-out"
      onClick={handleOnClick}
    >
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 hover:text-red-600 transition-colors duration-500 ease-in-out"
        onClick={handleOnDelete}
      >
        <XCircle size={24} />
      </Button>
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <div>{title}</div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Badge className="bg-indigo-600">{status}</Badge>
      </CardFooter>
    </Card>
  );
};

export default Task;
