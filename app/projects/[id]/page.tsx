'use client';
import React, { useEffect } from 'react';
import { getProject, linkTaskToProject } from '@/app/requests/projects';
import Task from '@/components/Task';
import { ProjectWithTask } from '@/app/types';
import { useParams } from 'next/navigation';
import Loading from '@/app/loading';
import TaskPicker from '@/components/TaskPicker';

export default function Project() {
  const params = useParams<{ id: string }>();
  const [project, setProject] = React.useState<ProjectWithTask | null>(null);
  const [selectedTasks, setSelectedTasks] = React.useState<string[]>([]);

  const fetchProject = async (id: string) => {
    const project = await getProject(id);
    setProject(project);
  };

  useEffect(() => {
    if (params.id) {
      fetchProject(params.id);
    }
  }, [params.id]);

  const handleOnTaskSelect = async (id: string) => {
    await linkTaskToProject(id, params.id);
    await fetchProject(params.id);
  };

  const handleOnTaskUnselect = (id: string) => {
    setSelectedTasks((prev) => prev.filter((taskId) => taskId !== id));
  };

  if (!project) {
    return <Loading />;
  }

  return (
    <div className="max-w-screen-xl rounded-md border border-gray-300 p-8 m-8">
      <div>
        <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
        <h4 className="text-lg text-slate-700 font-semibold mb-4">
          {project.description}
        </h4>
        <h5 className="text-2xl font-semibold mb-4">Tasks</h5>
        {project.Task?.map((task) => (
          <div className="mb-2" key={task.id}>
            <Task
              title={task.title}
              description={task.description}
              status={task.status}
            />
          </div>
        ))}
        <TaskPicker
          onTaskSelect={handleOnTaskSelect}
          onTaskUnselect={handleOnTaskUnselect}
          selectedTasks={selectedTasks}
        />
      </div>
    </div>
  );
}
