import { Link, useNavigate } from "react-router-dom";
import { SignOut, Stack } from "phosphor-react";
import { NavStyle } from "./style";

export function Navbar() {
    const navigate = useNavigate();
    return (
        <NavStyle>
            <Stack size={32} className="icon"/>
            <ul>
                <Link to={"/dashboard/projects"}>Projects</Link>
                <Link to={"/dashboard/2/tasks"}>Tasks</Link>
                <Link to={"#"}>Teams</Link>
                <div className="loggedUser">
                    <Link to={"#"}>Gabriel</Link>
                    <div className="pic">
                        
                    </div>
                    <SignOut tabIndex={0} size={20} onClick={() => navigate("/")} className="signOut"/>
                </div>
            </ul>
        </NavStyle>
    )
}