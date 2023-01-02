import axios, { AxiosResponse } from "axios";
import { LoginData, Project, SignUpData, Task, UserData } from "../@types/data";

const defaultUrl = "http://localhost:3333";

export function useApi() {

    const login = (data: LoginData): Promise<AxiosResponse> => {
        return axios.post(`${defaultUrl}/users/login`, data);
    }

    const signUp = (data: SignUpData): Promise<AxiosResponse> => {
        return axios.post(`${defaultUrl}/users`, data);
    }

    const getUser = (token: string, id: string): Promise<AxiosResponse> => {
        return axios.get(`${defaultUrl}/users/${id}`, {
            headers: {
                "Authorization": `bearer ${token}`
            }
        });
    }
    
    const deleteUser = (token: string, id: string): Promise<AxiosResponse> => {
        return axios.delete(`${defaultUrl}/users/${id}`, {
            headers: {
                "Authorization": `bearer ${token}`
            }
        })
    }

    const updateUser = (token: string, id: string, data: UserData): Promise<AxiosResponse> => {
        return axios.put(`${defaultUrl}/users/${id}`, data, {
            headers: {
                "Authorization": `bearer ${token}`
            }
        });
    }

    const getProjects = (token: string, id: string): Promise<AxiosResponse> => {
        return axios.get(`${defaultUrl}/projects/all/${id}`, {
            headers: {
                "Authorization": `bearer ${token}`
            }
        });
    }

    const newProject = (token: string, data: Project): Promise<AxiosResponse> => {
        return axios.post(`${defaultUrl}/projects`, data, {
            headers: {
                "Authorization": `bearer ${token}`
            }
        });
    }

    const deleteProject = (token: string, id: string): Promise<AxiosResponse> => {
        return axios.delete(`${defaultUrl}/projects/${id}`, {
            headers: {
                "Authorization": `bearer ${token}`
            }
        });
    }

    const updateProject = (token: string, id: string, data: Project): Promise<AxiosResponse> => {
        return axios.put(`${defaultUrl}/projects/${id}`, data, {
            headers: {
                "Authorization": `bearer ${token}`
            }
        });
    }

    const getTasks = (token: string, id: string): Promise<AxiosResponse> => {
        return axios.get(`${defaultUrl}/tasks/${id}`, {
            headers: {
                "Authorization": `bearer ${token}`
            }
        });
    }

    const newTask = (token: string, data: Task): Promise<AxiosResponse> => {
        return axios.post(`${defaultUrl}/tasks`, data, {
            headers: {
                "Authorization": `bearer ${token}`
            }
        });
    }

    const updateTask = (token: string, id: string, data: Task): Promise<AxiosResponse> => {
        return axios.put(`${defaultUrl}/tasks/${id}`, data, {
            headers: {
                "Authorization": `bearer ${token}`
            }
        });
    }

    const deleteTask = (token: string, id: string): Promise<AxiosResponse> => {
        return axios.delete(`${defaultUrl}/tasks/${id}`, {
            headers: {
                "Authorization": `bearer ${token}`
            }
        });
    }

    return {
        login,
        signUp,
        getUser,
        deleteUser,
        updateUser,
        newProject,
        getProjects,
        updateProject,
        deleteProject,
        getTasks,
        newTask,
        deleteTask,
        updateTask
    }
}