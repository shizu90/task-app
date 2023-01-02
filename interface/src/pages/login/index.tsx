import { Button } from "../../components/button";
import { TextInput } from "../../components/textInput";
import { EnvelopeSimple, Lock, User, XCircle } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { LoginPageStyle } from "./style";
import { FormEvent, useContext, useRef, useState } from "react";
import { handleFormData } from "../../hooks/formData";
import { LoginData, SignUpData } from "../../@types/data";
import { useApi } from "../../hooks/api";
import { regex } from "../../modules/regex";
import { ErrorMessage } from "../../components/errorMessage";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthContext";

export function LoginPage() {
    const [form, setForm] = useState<Number>(0);
    const [formData, setFormData] = useState<LoginData & SignUpData>({username: "", email: "", password: "", confirmPassword: ""});
    const {login, signUp} = useApi();
    const auth = useContext(AuthContext);
    const formHtml = useRef<HTMLFormElement>(null);
    const navigate = useNavigate();

    const handleSetForm = (formId: number) => {
        setForm(formId);
        setFormData({username: "", email: "", password: "", confirmPassword: ""});
        formHtml.current?.reset();
    }

    const handleLogin = (event: FormEvent) => {
        const data: LoginData = handleFormData(event) as unknown as LoginData;
        if(data.email.match(regex.email) && data.password.match(regex.password)) {
            login(data).then(res => {
                auth.setAuth(res.data);
                localStorage.setItem("auth", JSON.stringify(res.data));
                navigate("/dashboard");
            }).catch((err: AxiosError) => {
                toast.error(err.response?.data.message);
            });
        }
        formHtml.current?.reset();
    }

    const handleSignUp = (event: FormEvent) => {
        const data: SignUpData = handleFormData(event) as unknown as SignUpData;
        if(data.email.match(regex.email) && data.password.match(regex.password) && 
        data.username.match(regex.username) && data.confirmPassword.match(data.password)) {
            signUp(data).then(res => {
                toast.success("Account created.");
                setForm(0);
            }).catch((err: AxiosError) => {
                toast.error(err.response?.data.message);
            });
        }
        formHtml.current?.reset();
    }

    return (
        <LoginPageStyle>
            {form === 0 ? (
                <h1>Enter your credentials</h1>
            ) : (
                <h1>Create an account</h1>
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
                    <form onSubmit={(e) => handleLogin(e)} ref={formHtml}>
                        <div className="group">
                            <div className="input">
                                <EnvelopeSimple size={32}/>
                                <TextInput type="text" placeholder="Email" spellCheck={false} id="email" name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                            <ErrorMessage 
                                visible={formData.email !== "" && !formData.email.match(regex.email)} 
                                value={"Invalid e-mail."}
                            />
                        </div>
                        <div className="group">
                            <div className="input">
                                <Lock size={32}/>
                                <TextInput type="password" placeholder="Password" spellCheck={false} id="password" name="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                />
                            </div>
                            <ErrorMessage 
                                visible={formData.password !== "" && !formData.password.match(regex.password)} 
                                value={"Invalid password."}
                            />
                        </div>
                        <Button type="submit" value="Login"/>
                    </form>
                    <Link to="#" onClick={() => handleSetForm(1)}>Don't have an account? Sign up here</Link>
                </>
            ) : (
                <>
                    <form onSubmit={(e) => handleSignUp(e)} ref={formHtml}>
                        <div className="group">
                            <div className="input">
                                <User size={32}/>
                                <TextInput type="text" placeholder="Username" spellCheck={false} id="username" name="username"
                                    value={formData.username}
                                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                                />
                            </div>
                            <ErrorMessage 
                                visible={formData.username !== "" && !formData.username.match(regex.username)} 
                                value={"Invalid username."}
                            />
                        </div>
                        <div className="group">
                            <div className="input">
                                <EnvelopeSimple size={32}/>
                                <TextInput type="text" placeholder="Email" spellCheck={false} id="email" name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                            <ErrorMessage 
                                visible={formData.email !== "" && !formData.email.match(regex.email)} 
                                value={"Invalid e-mail."}
                            />
                        </div>
                        <div className="group">
                            <div className="input">
                                <Lock size={32}/>
                                <TextInput type="password" placeholder="Password" spellCheck={false} id="password" name="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                />
                            </div>
                            <ErrorMessage 
                                visible={formData.password !== "" && !formData.password.match(regex.password)} 
                                value={"Invalid password."}
                            />
                        </div>
                        <div className="group">
                            <div className="input">
                                <Lock size={32}/>
                                <TextInput type="password" placeholder="Confirm password" spellCheck={false} id="confirmPassword" name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                />
                            </div>
                            <ErrorMessage 
                                visible={formData.confirmPassword !== "" && !formData.confirmPassword.match(formData.password)} 
                                value={"Passwords don't match."}
                            />
                        </div>
                        <Button type="submit" value="Create"/>
                    </form>
                    <Link to="#" onClick={() => handleSetForm(0)}>Already have an account? Login here</Link>
                </>
                
            )}
        </LoginPageStyle>
    )
}