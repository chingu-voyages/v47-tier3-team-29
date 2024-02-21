import { Project, Task } from "@prisma/client";

export type ProjectWithTask = ({
    Task?: Task[]
} & Project)

