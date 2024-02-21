import prisma from '@/app/lib/prisma';
import { NextRequest } from 'next/server';

async function GET(_: NextRequest, context: { params: { id: string } }) {

    const project = await prisma.project.findUnique({
        where: { id: context.params.id },
        include: { Task: true },
    });

    return Response.json(project);
}

export { GET }