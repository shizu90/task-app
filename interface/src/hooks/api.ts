import axios from "axios";
import { LoginData, SignUpData } from "../@types/data";

const defaultUrl = "http://localhost:3333";

export function useApi() {

    const login = (data: LoginData) => {
        return axios.post(`${defaultUrl}/users/login`, {data});
    }

    const signUp = (data: SignUpData) => {
        return axios.post(`${defaultUrl}/users`, {data});
    }

    

    return {
        login,
        signUp
    }
}