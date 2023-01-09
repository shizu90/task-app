import { AxiosError} from "axios";
import { Task } from "../../../@types/data";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { SideNavbar } from "../../../components/nav/sideNav";
import { TasksBoard } from "../../../components/tasksBoard";
import { useApi } from "../../../hooks/api";

interface TasksPageProps {
    token: string
    userId: string
}

export function TasksPage(props: TasksPageProps) {
    const [data, setData] = useState<Task[]>();

    const projectId: string = window.location.href.split("/")[5];
    const {newTask, getTasks, updateTask, deleteTask} = useApi();

    const handleInsertTask = (data: Task) => {
        newTask(props.token, {content: data.content, status: 0, projectId: projectId})
        .then(res => {
            toast.success(res.data);
        })
        .catch((err: AxiosError) => {
            toast.error(err.response?.data.message);
        })
    }

    useEffect(() => {
        getTasks(props.token, projectId)
        .then(res => {
            setData(res.data.tasks);
        })
        .catch((err: AxiosError) => {
            toast.error(err.response?.data.message);
        })
    }, [])


    return (
        <>
            {
                data ? (
                    <>
                        <SideNavbar/>
                        <TasksBoard data={data} insertTask={handleInsertTask}/>
                    </>
                ) : (null)
            }
        </>
    )
}