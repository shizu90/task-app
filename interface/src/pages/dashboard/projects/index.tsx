import { AxiosError } from "axios";
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
    const {getProjects, newProject, deleteProject, updateProject, errorHandler} = useApi();
    const context = useContext(AuthContext);

    const handleInsertProject = (data: Project) => {
        newProject(props.token, {...data, userId: props.userId})
        .then(res => {
            toast.success("Project created successfully.");
        })
        .catch((err: AxiosError) => {
            errorHandler(context, err);
        })
    }

    const handleEditProject = (projectId: string, data: Project) => {
        updateProject(props.token, projectId, data)
        .then(res => {
            toast.success("Project updated successfully.");
        })
        .catch((err: AxiosError) => {
            errorHandler(context, err);
        })
    }

    const handleDeleteProject = (projectId: string) => {
        deleteProject(props.token, projectId)
        .then(res => {
            toast.success("Project deleted.");
        })
        .catch((err: AxiosError) => {
            errorHandler(context, err);
        })
    }

    useEffect(() => {
        getProjects(props.token, props.userId)
        .then(res => {
            setData(res.data.projects);
        })
        .catch((err: AxiosError) => {
            errorHandler(context, err);
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