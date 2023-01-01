import { Button } from "../../components/button";
import { TextInput } from "../../components/textInput";
import { EnvelopeSimple, Lock, User } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { LoginPageStyle } from "./style";
import { FormEvent, useState } from "react";
import { handleFormData } from "../../hooks/formData";
import { LoginData, SignUpData } from "../../@types/data";
import { useApi } from "../../hooks/api";

export function LoginPage() {
    const [form, setForm] = useState<Number>(0);
    const {login, signUp} = useApi();

    const navigate = useNavigate();

    const handleSetForm = (formId: number) => {
        setForm(formId);

    }

    const handleLogin = (event: FormEvent) => {
        const data: LoginData = handleFormData(event) as unknown as LoginData;
        if(data.email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/) && data.password.match(/^.{6,24}$/)) {
            setForm(1);
            login(data);

        }
    }

    const handleSignUp = (event: FormEvent) => {
        const data: SignUpData = handleFormData(event) as unknown as SignUpData;
        if(data.email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/) && data.password.match(/^.{6,24}$/) && 
        data.username.match(/^[A-Za-z0-9 _]{2,24}$/) && data.confirmPassword.match(data.password)) {
            signUp(data);
        }
    }

    return (
        <LoginPageStyle>
            {form === 0 ? (
                <h1>Enter your credentials</h1>
            ) : (
                <h1>Sign up</h1>
            )}
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
            {form === 0 ? (
                <>
                    <form onSubmit={(e) => handleLogin(e)}>
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
                        <Button type="submit" value="Login"/>
                    </form>
                    <Link to="#" onClick={() => setForm(1)}>Don't have an account? Sign up here</Link>
                </>
            ) : (
                <>
                    <form onSubmit={(e) => handleSignUp(e)}>
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
                                <TextInput type="password" placeholder="Confirm password" spellCheck={false} id="confirmPassword" name="confirmPassword"/>
                            </div>
                        </div>
                        <Button type="button" value="Create"/>
                    </form>
                    <Link to="#" onClick={() => setForm(0)}>Already have an account? Login here</Link>
                </>
                
            )}
        </LoginPageStyle>
    )
}