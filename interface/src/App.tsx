import GlobalStyle from './styles/GlobalStyle'
import { HashRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from './pages/dashboard';
import { LoginPage } from './pages/login';
import { ProjectsPage } from './pages/dashboard/projects';
import { TasksPage } from './pages/dashboard/tasks';

export function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={ <LoginPage/> }/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/dashboard/projects" element={<ProjectsPage/>}/>
          <Route path="/dashboard/:projectId/tasks" element={<TasksPage/>}/>
        </Routes>
      </HashRouter>
      <GlobalStyle/>
    </>
  )
}