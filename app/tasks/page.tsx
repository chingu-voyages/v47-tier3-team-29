import React from 'react';
import prisma from '../lib/prisma';
import { getServerSession } from 'next-auth';
import { auth } from '@/lib/auth';

export default async function Tasks() {
  const session = await auth();

  try {
    const task = await prisma.task.create({
      data: {
        title: 'New Task',
        content: 'New Task Content',
        user: { connect: { email: session!.user!.email! } },
      },
    });

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Tasks
        {task.title}
      </main>
    );
  } catch (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Error
      </main>
    );
  }
}
