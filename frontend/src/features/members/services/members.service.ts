import apiClient from "@/lib/apiClient";
import { memberInviteInput } from "../types/members.type";

export const sendInvite = async (data: memberInviteInput) => {
    const response = await apiClient.post('/invitations/send', data);
    return response.data;
}
export const fetchMembersList = async () => {
    const response = await apiClient.get('/members');
    return response.data;
}