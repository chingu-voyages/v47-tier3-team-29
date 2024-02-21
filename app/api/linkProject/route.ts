import prisma from '@/app/lib/prisma';
import { auth } from "@/lib/auth";

async function POST(request: Request) {
    const session = await auth();
    const data = await request.json();

    if (!session?.user?.email) {
        return Response.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const created = await prisma.project.update({
        where: { id: data.projectId },
        data: {
            Task: {
                connect: { id: data.taskId }
            }
        }
    });

    return Response.json({ created });
}

export { POST };