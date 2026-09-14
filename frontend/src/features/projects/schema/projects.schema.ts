import { z } from 'zod';
export const createProjectSchema = z.object({
    name: z.string().min(1, 'Project name is required'),
    description: z.string().optional(),
    assignee: z.string().array().min(1, { message: 'Assignee is required' })
})
export type createProjectSchemaType = z.infer<typeof createProjectSchema>;
