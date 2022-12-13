import { RegisterPage } from './pages/register'
import GlobalStyle from './styles/GlobalStyle'
import { HashRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from './pages/dashboard';
import { LoginPage } from './pages/login';

export function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={ <LoginPage/> }/>
          <Route path="/register" element={ <RegisterPage/> }/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/dashboard/projects" element={<></>}/>
          <Route path="/dashboard/:projectId/tasks" element={<></>}/>
        </Routes>
      </HashRouter>
      <GlobalStyle/>
    </>
  )
}