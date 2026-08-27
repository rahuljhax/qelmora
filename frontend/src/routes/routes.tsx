import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardLayout from "../layouts/DashboardLayout"
import { DashboardPage } from "../features/dashboard/pages/DashboardPage"
import { ProjectsPage } from "../features/projects/pages/ProjectsPage"
import { LoginPage } from "../features/auth/pages/LoginPage"
import { SignupPage } from "../features/auth/pages/SignupPage"
import { HomePage } from "../pages/HomePage"
import { ProjectDetailPage } from "../features/projects/pages/ProjectDetailPage"
import { TaskDetailPage } from "../features/projects/pages/TaskDetailPage"
import { CreateProjectPage } from "../features/projects/pages/CreateProjectPage"
import { EditProjectPage } from "../features/projects/pages/EditProjectPage"
import { CreateTaskPage } from "../features/projects/pages/CreateTaskPage"
import { EditTaskPage } from "../features/projects/pages/EditTaskPage"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="projects">
                        <Route index element={<ProjectsPage />} />
                        <Route path=":id" element={<ProjectDetailPage />} />
                        <Route path=":id/tasks/:taskId" element={<TaskDetailPage />} />
                        <Route path=":id/tasks/create" element={<CreateTaskPage />} />
                        <Route path=":id/tasks/:taskId/edit" element={<EditTaskPage />} />
                        <Route path="create" element={<CreateProjectPage />} />
                        <Route path=":id/edit" element={<EditProjectPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}