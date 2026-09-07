export type UserRole = 'admin' | 'manager' | 'member';

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    organization: string
}
export interface AcceptInviteInput {
    name: string;
    password: string;
    token: string;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    accessToken: string;
    data: User,
}