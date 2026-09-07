import apiClient, { setAccessToken } from "@/lib/apiClient";
import { AuthResponse } from "../types/auth.types";
import { loginSchemaType, SingupSchemaType } from "../schema/auth.schema";

export const authService = {
    async signup(input: SingupSchemaType): Promise<AuthResponse> {
        const { confirmPassword, ...payload } = input;
        const response = await apiClient.post<AuthResponse>('/auth/signup', payload);
        if (response.data.accessToken) {
            setAccessToken(response.data.accessToken)
        }
        return response.data;
    },
    async login(input: loginSchemaType): Promise<AuthResponse> {
        const response = await apiClient.post('/auth/login', input);
        if (response.data.accessToken) {
            setAccessToken(response.data.accessToken);
        }
        return response.data;
    }
} 