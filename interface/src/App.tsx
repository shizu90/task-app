import GlobalStyle from './styles/GlobalStyle'
import { HashRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from './pages/dashboard';
import { LoginPage } from './pages/login';
import { Toaster } from 'react-hot-toast';
import theme from './styles/theme';
import styled from 'styled-components';

const AppStyle = styled.div`
  .toaster {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
  }
`

export function App() {
  return (
    <AppStyle>
      <Toaster toastOptions={{className: "toaster", success: {iconTheme: {primary: theme.colors.primary, secondary: theme.colors.text}}}}/>
      <HashRouter>
        <Routes>
          <Route path="/" element={ <LoginPage/> }/>
          <Route path="/dashboard/*" element={<DashboardPage/>}/>
        </Routes>
      </HashRouter>
      <GlobalStyle/>
    </AppStyle>
  )
}