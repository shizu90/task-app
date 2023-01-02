import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router";
import { Navbar } from "../../components/nav";
import { Auth, AuthContext } from "../../context/AuthContext";
import { DashboardHome } from "./home";
import { ProjectsPage } from "./projects";
import { DashboardStyle } from "./style";
import { TasksPage } from "./tasks";

export function DashboardPage() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const storage: Auth = JSON.parse(localStorage.getItem("auth"));
    useEffect(() => {
        if(auth.auth.token === "" && storage === null) {
            auth.setAuth({id: "", token: "", username: ""});
            localStorage.clear();
            navigate("/");
        } 
    }, [auth.auth])

    return (
        <DashboardStyle>
            <Navbar/>
            <main>
                <Routes>
                    <Route path="/" element={<DashboardHome username={auth.auth.username || storage.username}/>}/>
                    <Route path="/:projectId/tasks" element={<TasksPage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                </Routes>
            </main>
        </DashboardStyle>
    )
}