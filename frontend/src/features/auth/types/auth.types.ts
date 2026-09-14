import { User } from "@/shared/types/shared.type";

export interface AcceptInviteInput {
    name: string;
    password: string;
    token: string | null;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    accessToken: string;
    data: User,
}