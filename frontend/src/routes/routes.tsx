import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardLayout from "../layouts/DashboardLayout"
import { DashboardPage } from "../features/dashboard/pages/DashboardPage"
import { ProjectsPage } from "../features/projects/pages/ProjectsPage"
import { LoginPage } from "../features/auth/pages/LoginPage"
import { SignupPage } from "../features/auth/pages/SignupPage"
import { HomePage } from "../pages/HomePage"

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<DashboardPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}