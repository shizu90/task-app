import { Axios, AxiosError } from "axios";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Project } from "../../../@types/data";
import { ProjectsList } from "../../../components/projectsList";
import { AuthContext } from "../../../context/AuthContext";
import { useApi } from "../../../hooks/api";

interface ProjectsPageProps {
    userId: string,
    token: string
}

export function ProjectsPage(props: ProjectsPageProps) {
    const [data, setData] = useState<Project[]>();
    const {getProjects, newProject, deleteProject, updateProject} = useApi();
    const context = useContext(AuthContext);

    const apiHandler = (err: AxiosError) => {
        if(!err.response) return;
        if(!err.response.data) return;
        if(err.response.data.status === 401) {
            localStorage.clear();
            context.setAuth({id: "", token: "", username: ""});
        }else {
            toast.error(err.response.data.message);
        }
    }

    const handleInsertProject = (data: Project) => {
        newProject(props.token, {...data, userId: props.userId})
        .then(res => {
            toast.success(res.data);
        })
        .catch((err: AxiosError) => {
            apiHandler(err);
        })
    }

    const handleEditProject = (projectId: string, data: Project) => {
        updateProject(props.token, projectId, {title: data.title, description: data.description})
        .then(res => {
            toast.success(res.data);
        })
        .catch((err: AxiosError) => {
            apiHandler(err);
        })
    }

    const handleDeleteProject = (projectId: string) => {
        deleteProject(props.token, projectId)
        .then(res => {
            toast.success(res.data);
        })
        .catch((err: AxiosError) => {
            apiHandler(err);
        })
    }

    useEffect(() => {
        getProjects(props.token, props.userId)
        .then(res => {
            setData(res.data.projects);
        })
        .catch((err: AxiosError) => {
            apiHandler(err);
        })
    }, [])

    return (
        <>
            {
                data ? (
                    <ProjectsList 
                        data={data} 
                        insertProject={handleInsertProject} 
                        deleteProject={handleDeleteProject}
                        editProject={handleEditProject}/>
                ) : (null)
            }
        </>
    )
}