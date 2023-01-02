import { Link, useNavigate } from "react-router-dom";
import { SignOut, Stack } from "phosphor-react";
import { NavStyle } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Navbar() {
    const navigate = useNavigate();
    const context = useContext(AuthContext);
    const handleLogout = () => {
        localStorage.clear();
        context.setAuth({id: "", username: "", token: ""});
        navigate("/");
    }

    return (
        <NavStyle>
            <Stack size={32} className="icon" onClick={() => navigate("/dashboard")}/>
            <ul>
                <Link to={"/dashboard/projects"}>Projects</Link>
                <Link to={"/dashboard/2/tasks"}>Tasks</Link>
                <Link to={"#"}>Teams</Link>
                <div className="loggedUser">
                    <Link to={"#"}>Gabriel</Link>
                    <div className="pic">
                        
                    </div>
                    <SignOut tabIndex={0} size={20} onClick={() => handleLogout()} className="signOut"/>
                </div>
            </ul>
        </NavStyle>
    )
}