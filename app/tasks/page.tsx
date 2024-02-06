import React from 'react';
import prisma from '../lib/prisma';
import { getServerSession } from 'next-auth';
import { auth } from '@/lib/auth';

export default async function Tasks() {
  const session = await auth();

  if (!session?.user?.email) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Not logged in
      </main>
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
    });

    const tasks = await prisma.task.findMany({
      where: {
        userId: user?.id,
      },
    });

    return (
      <div className="flex flex-col justify-center items-center">
        <div className="font-semibold text-2xl mb-5">Tasks</div>
        <div>
          {tasks.map((task) => (
            <div key={task.id} className="mb-2 p-6 rounded-md border">
              <h2>{task.title}</h2>
              <p>{task.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Error
      </main>
    );
  }
}
