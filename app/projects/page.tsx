'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Dialog from '@/components/Dialog';
import { createProject, getProjects } from '@/app/requests/projects';
import { useSession } from 'next-auth/react';
import { Loader2 } from 'lucide-react';
import { ProjectWithTask } from '../types';
import Project from '@/components/Project';
import TaskPicker from '@/components/TaskPicker';

export default function Projects() {
  const session = useSession();

  const [showCreateTaskDialog, setShowCreateProjectDialog] =
    React.useState(false);
  const [projects, setProjects] = React.useState<ProjectWithTask[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [selectedTasks, setSelectedTasks] = React.useState<string[]>([]);

  const inputProjectName = useRef<HTMLInputElement>(null);
  const inputProjectDescription = useRef<HTMLInputElement>(null);

  const router = useRouter();

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data.projects);
    });
  }, []);

  const handleCreateProject = async () => {
    if (!inputProjectName.current?.value) {
      return;
    }

    if (!inputProjectDescription.current?.value) {
      return;
    }

    setLoading(true);

    const data = await createProject({
      title: inputProjectName.current?.value,
      description: inputProjectDescription.current?.value,
      tasks: selectedTasks,
    });

    setProjects((prev) => [...prev, data.created]);

    setShowCreateProjectDialog(false);
    setLoading(false);
  };

  const handleOnSelect = (id: string) => {
    router.push(`/projects/${id}`);
  };

  const handleOnDelete = async (id: string) => {
    const deleted = await fetch(`/api/projects`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    }).then((res) => res.json());

    if (deleted)
      setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  const handleOnTaskSelect = (id: string) => {
    setSelectedTasks((prev) => [...prev, id]);
  };

  const handleOnTaskUnselect = (id: string) => {
    setSelectedTasks((prev) => prev.filter((taskId) => taskId !== id));
  };

  useEffect(() => {
    if (!showCreateTaskDialog) {
      setSelectedTasks([]);
    }
  }, [showCreateTaskDialog]);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-semibold text-3xl mb-10 text-slate-800">
        {session.data?.user?.name && `${session.data?.user?.name}'s`}{' '}
        <span className="text-indigo-600">Projects</span>
      </div>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            status={`Task count: ${project?.Task?.length || 0}`}
            onSelect={() => handleOnSelect(project.id)}
            onDelete={() => handleOnDelete(project.id)}
          />
        ))}
      </div>
      <div className="my-6">
        <Dialog
          open={showCreateTaskDialog}
          onOpenChange={setShowCreateProjectDialog}
          title="Create a new Project"
          DialogTrigger={<Button>Create</Button>}
          Actions={
            <Button size="sm" onClick={handleCreateProject} disabled={loading}>
              Create{' '}
              {loading ? (
                <Loader2 size={16} className="ml-2 animate-spin" />
              ) : null}
            </Button>
          }
        >
          {<Input placeholder="Project name" ref={inputProjectName} />}
          {
            <Input
              placeholder="Project description"
              ref={inputProjectDescription}
            />
          }
          {
            <div>
              <h3 className="my-3 font-semibold ">Link tasks</h3>
              <TaskPicker
                onTaskSelect={handleOnTaskSelect}
                onTaskUnselect={handleOnTaskUnselect}
                selectedTasks={selectedTasks}
              />
            </div>
          }
        </Dialog>
      </div>
    </div>
  );
}
