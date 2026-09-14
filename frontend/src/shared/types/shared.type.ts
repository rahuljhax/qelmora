export type UserRole = 'admin' | 'manager' | 'member';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    organization: string
}