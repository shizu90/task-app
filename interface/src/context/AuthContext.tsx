import { createContext, useState } from "react"

export interface Auth {
    token: string,
    id: string,
    username: string
}

export interface AuthType {
    auth: Auth,
    setAuth: (auth: Auth) => void
}

const AuthInitialValue: AuthType = {
    auth: {id: "", token: "", username: ""},
    setAuth: (auth: Auth) => {}
}

export const AuthContext = createContext<AuthType>(AuthInitialValue);

export const AuthProvider = ({children}: any) => {
    const [auth, setAuth] = useState<Auth>({id: "", token: "", username: ""});

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}