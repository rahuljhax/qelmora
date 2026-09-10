import apiClient from "@/lib/apiClient";
import { memberInviteInput } from "../types/members.type";

export const sendInvite = async (data: memberInviteInput) => {
    const response = await apiClient.post('/invitations/send', data);
    return response.data;
}