import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";


let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
    accessToken = token;
}

export const getAccessToken = () => accessToken;

// Axios Instance 
const apiClient: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Axios request interceptor for adding token
apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        if (accessToken && config.headers) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }
        return config
    },
    (error: AxiosError) => {
        return Promise.reject(error)
    }
);

apiClient.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
        const isAuthRequest = originalRequest.url?.includes('/auth/refresh-token') ||
            originalRequest.url?.includes('/auth/login') ||
            originalRequest.url?.includes('/auth/signup') ||
            originalRequest.url?.includes('/auth/logout');

        if (error.response?.status === 401 && originalRequest && !originalRequest._retry && !isAuthRequest) {

            originalRequest._retry = true;

            try {
                const refreshURL = `${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000/api'}/auth/refresh-token`;

                const res = await axios.post(refreshURL, {}, { withCredentials: true });
                const newAccesstoken = res.data.accessToken;
                setAccessToken(newAccesstoken);

                if (originalRequest.headers) {
                    originalRequest.headers.Authorization = `Bearer ${newAccesstoken}`
                }
                return apiClient(originalRequest)
            } catch (refreshError) {
                setAccessToken(null);
                if (typeof window !== 'undefined') {
                    window.location.href = '/login'
                }
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error);
    }
);



export default apiClient;