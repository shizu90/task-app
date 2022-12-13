import { Task } from "../@types/data";

export const filterTasksByStatus = (status: number, data: Task[]) => {
    return data.filter((task) => {
        if(task.status !== status) {
            return false;
        }else return true;
    }).map((el) => {return el;})
}