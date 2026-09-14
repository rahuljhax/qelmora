export interface Project {
    id: string,
    name: string,
    description: string,
    assignee: string[],
    createdBy: string,
    organization: string,
    createdAt: string,
}
export interface ProjectsApiResponse {
    success: string,
    message: string,
    data: Project[]
}