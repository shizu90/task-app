import { Button } from "../../components/button";
import { TextInput } from "../../components/textInput";
import { EnvelopeSimple, Lock } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { LoginPageStyle } from "./style";

export function LoginPage() {
    const navigate = useNavigate();
    return (
        <LoginPageStyle>
            <h1>Enter your credentials</h1>
            <div className="cubes">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <form>
                <div className="group">
                    <div className="input">
                        <EnvelopeSimple size={32}/>
                        <TextInput type="text" placeholder="Email" spellCheck={false} id="email" name="email"/>
                    </div>
                </div>
                <div className="group">
                    <div className="input">
                        <Lock size={32}/>
                        <TextInput type="text" placeholder="Password" spellCheck={false} id="password" name="password"/>
                    </div>
                </div>
                <Button type="submit" value="Login" onClick={() => navigate("/dashboard")}/>
            </form>
            <Link to="/register">Don't have an account? Sign up here</Link>
        </LoginPageStyle>
    )
}