import { TextInput } from "../../components/textInput";
import { LoginPageStyle } from "../login/style";
import { User, EnvelopeSimple, Lock } from "phosphor-react";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";

export function RegisterPage() {
    return (
        <LoginPageStyle>
            <h1>Create an account</h1>
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
                        <User size={32}/>
                        <TextInput type="text" placeholder="Username" spellCheck={false} id="username" name="username"/>
                    </div>
                </div>
                <div className="group">
                    <div className="input">
                        <EnvelopeSimple size={32}/>
                        <TextInput type="text" placeholder="Email" spellCheck={false} id="email" name="email"/>
                    </div>
                </div>
                <div className="group">
                    <div className="input">
                        <Lock size={32}/>
                        <TextInput type="password" placeholder="Password" spellCheck={false} id="password" name="password"/>
                    </div>
                </div>
                <div className="group">
                    <div className="input">
                        <Lock size={32}/>
                        <TextInput type="password" placeholder="Confirm password" spellCheck={false} id="confirm" name="confirm"/>
                    </div>
                </div>
                <Button type="button" value="Create"/>
            </form>
            <Link to="/">Already have an account? Login here</Link>
        </LoginPageStyle>
    )
}