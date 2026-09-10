import { z } from 'zod';

export const membersSchema = z.object({
    email: z.string().email('Please enter a valid email'),
    role: z.enum(['admin', 'manager', 'member'])
})

export type membersSchemaType = z.infer<typeof membersSchema>;