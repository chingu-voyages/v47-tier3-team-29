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

  const projects = await prisma.project.findMany({
    where: { userId: user.id },
    include: { Task: true },
  });
  return Response.json({ projects });
}

async function POST(request: Request) {
  const session = await auth();
  const data = await request.json();

  if (!session?.user?.email) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const created = await prisma.project.create({
    data: {
      title: data.project.title,
      description: data.project.description,
      user: { connect: { email: session.user.email } },
      Task: {
        connect: data.project.tasks.map((taskId: string) => ({
          id: taskId
        })),
      }
    }
  });

  return Response.json({ created });
}

async function DELETE(request: Request) {
  const session = await auth();

  if (!session?.user?.email) {
    return Response.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const data = await request.json();

  const projectId = data.id;

  const deleted = await prisma.project.delete({
    where: { id: projectId },
  });

  return Response.json({ deleted });
}

export { GET, POST, DELETE };
