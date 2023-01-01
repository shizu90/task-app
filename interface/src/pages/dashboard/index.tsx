import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { Navbar } from "../../components/nav";
import { AuthContext } from "../../context/AuthContext";
import { DashboardStyle } from "./style";

export function DashboardPage() {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.auth.token === "") {
            auth.setAuth({id: "", token: "", username: ""});
            localStorage.clear();
            navigate("/");
        } 
    }, [auth.auth])

    return (
        <DashboardStyle>
            <Navbar/>
            <main>
                <h1>Welcome, User</h1>
            </main>
        </DashboardStyle>
    )
}