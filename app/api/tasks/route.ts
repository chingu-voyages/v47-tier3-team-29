import prisma from '@/app/lib/prisma';
import { auth } from '@/lib/auth';

async function GET() {
  const session = await auth();

  if (!session?.user?.email) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const tasks = await prisma.task.findMany({
    where: { userId: user.id },
  });

  return Response.json({ tasks });
}

async function POST(request: Request) {
  const session = await auth();
  const data = await request.json();

  if (!session?.user?.email) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const created = await prisma.task.create({
    data: {
      title: data.task.title,
      description: data.task.description,
      user: { connect: { email: session.user.email } },
    },
  });

  return Response.json({ created });
}

async function DELETE(request: Request) {
  const session = await auth();

  if (!session?.user?.email) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const data = await request.json();

  const taskId = data.id;

  const deleted = await prisma.task.delete({
    where: { id: taskId },
  });

  return Response.json({ deleted });
}

export { GET, POST, DELETE };
