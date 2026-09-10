import { UserRole } from "@/features/auth/types/auth.types";

export interface memberInviteInput {
    email: string,
    role: UserRole,
    invitedBy?: string,
    organization?: string
}