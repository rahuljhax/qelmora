import apiClient from "@/lib/apiClient";
import { createProjectSchemaType } from "../schema/projects.schema";
import { ProjectsApiResponse } from "../types/projects.type";

export const createProject = async (data: createProjectSchemaType) => {
    console.log('create called')
    const response = await apiClient.post('/projects', data);
    return response.data;
}
export const getProjects = async (): Promise<ProjectsApiResponse> => {
    const response = await apiClient.get('/projects');
    return response.data;
}

export const getProjectById = async (id: string) => {
    const response = await apiClient.get(`/projects/${id}`);
    return response.data;
}

export const updateProject = async (id: string, data: createProjectSchemaType) => {
    console.log('update called')
    const response = await apiClient.put(`/projects/${id}`, data);
    return response.data;
}

export const deleteProject = async (id: string) => {
    const response = await apiClient.delete(`/projects/${id}`);
    return response.data;
}