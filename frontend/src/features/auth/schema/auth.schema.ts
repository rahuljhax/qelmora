import { z } from "zod";

export const signupSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(2, 'Password must be at least 8 characters'),
    confirmPassword: z.string().min(2, 'Password must be at least 8 characters'),
    organization: z.string().min(2, 'Organization name is required'),
    role: z.enum(['admin', 'manager', 'member']).default('admin')
}).refine(
    (data) => data.password === data.confirmPassword,
    {
        message: 'Password do not match',
        path: ['confirmPassword']
    }
)

export const loginSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(2, 'Password must be at least 8 characters')
})

export type SingupSchemaType = z.infer<typeof signupSchema>;
export type loginSchemaType = z.infer<typeof loginSchema>;