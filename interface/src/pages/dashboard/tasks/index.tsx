import { AxiosError} from "axios";
import { Task } from "../../../@types/data";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { SideNavbar } from "../../../components/nav/sideNav";
import { TasksBoard } from "../../../components/tasksBoard";
import { useApi } from "../../../hooks/api";
import { AuthContext } from "../../../context/AuthContext";

interface TasksPageProps {
    token: string
    userId: string
}

export function TasksPage(props: TasksPageProps) {
    const [data, setData] = useState<Task[]>();
    const context = useContext(AuthContext);
    const projectId: string = window.location.href.split("/")[5];
    const {getTasks, newTask, updateTask, deleteTask, errorHandler} = useApi();

    const handleEditTask = (data: Task, id: string) => {
        updateTask(props.token, id, data)
        .catch((err: AxiosError) => {
            errorHandler(context, err);
        })
    }

    const handleDeleteTask = (id: string) => {
        deleteTask(props.token, id)
        .then(res => toast.success("Deleted task successfully."))
        .catch((err: AxiosError) => {
            errorHandler(context, err);
        })
    }

    const handleInsertTask = (data: Task) => {
        newTask(props.token, {...data, projectId})
        .then(res => {
            toast.success(res.data);
        })
        .catch((err: AxiosError) => {
            errorHandler(context, err);
        })
    }

    useEffect(() => {
        getTasks(props.token, projectId)
        .then(res => {
            setData(res.data.tasks);
        })
        .catch((err: AxiosError) => {
            errorHandler(context, err);
        })
    }, [])


    return (
        <>
            {
                data ? (
                    <>
                        <SideNavbar/>
                        <TasksBoard 
                            data={data} 
                            insertTask={handleInsertTask}
                            editTask={handleEditTask}
                            deleteTask={handleDeleteTask}    
                        />
                    </>
                ) : (null)
            }
        </>
    )
}