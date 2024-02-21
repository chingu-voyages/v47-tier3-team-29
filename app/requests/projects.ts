import { Project, Task, } from '@prisma/client';
import { ProjectWithTask } from '../types';

async function createProject(
    project: {
        title: string;
        description: string;
        tasks: string[];
    }

): Promise<{ created: Task }> {
    const created = await fetch('/api/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            project: {
                title: project.title,
                description: project.description,
                tasks: project.tasks,
            },
        }),
    });

    return created.json();
}

async function getProjects(): Promise<{
    projects:
    ProjectWithTask[]
}> {
    const response = await fetch('/api/projects');
    return response.json();
}

async function getProject(id: string): Promise<ProjectWithTask | null> {
    const response = await fetch(`/api/projects/${id}`);
    const project = await response.json();

    return project;

}

async function deleteProject(id: string): Promise<{ deleted: Project }> {
    const deleted = await fetch(`/api/project/${id}`, {
        method: 'DELETE',
    });

    return deleted.json();
}

async function linkTaskToProject(
    taskId: string,
    projectId: string
): Promise<{ linked: boolean }> {
    const linked = await fetch(`/api/linkProject`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taskId, projectId }),
    });

    return linked.json();
}

export { createProject, getProjects, getProject, deleteProject, linkTaskToProject };
