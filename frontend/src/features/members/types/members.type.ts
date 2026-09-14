import { User, UserRole } from "@/shared/types/shared.type";

export interface memberInviteInput {
    email: string,
    role: UserRole,
    invitedBy?: string,
    organization?: string
}

export interface membersApiResposne {
    success: string,
    message: string,
    data: User[]
}
