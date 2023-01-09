import { TaskList } from "../taskList";
import { BoardContainer } from "./style";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { List, Lists, Task } from "../../@types/data";
import { useState } from "react";
import { filterTasksByStatus } from "../../modules/filter";

interface TasksBoardProps {
    data: Task[]
    insertTask: (data: Task) => void
}

const lists: Lists = {
    todo: {id: 0, title: "TODO", tasks: [], creatable: true},
    doing: {id: 1, title: "DOING", tasks: [], creatable: false},
    paused: {id: 2, title: "PAUSED", tasks: [], creatable: false},
    done: {id: 3, title: "DONE", tasks: [], creatable: false} 
}

export function TasksBoard(props: TasksBoardProps) {
    const [data, setData] = useState<Task[]>(props.data);

    lists.todo.tasks = filterTasksByStatus(0, data);
    lists.doing.tasks = filterTasksByStatus(1, data);
    lists.paused.tasks = filterTasksByStatus(2, data);
    lists.done.tasks = filterTasksByStatus(3, data);

    const reorderList = (srcList: List, startIndex: number, endIndex: number) => {
        const newTasks = Array.from(srcList.tasks);
        const [removed] = newTasks.splice(startIndex, 1);
        newTasks.splice(endIndex, 0, removed);

        return {
            ...srcList,
            tasks: newTasks
        };
    }

    const handleDrop = (result: DropResult) => {
        const {destination, source, draggableId} = result;
        
        // check if destination or source drop area are both valid
        if(!destination || !source) return;
        if(destination.droppableId === source.droppableId && destination.index === source.index) return;
        // locate the current source and destination list 
        const srcIndex = Object.keys(lists)[Number(source.droppableId)] as unknown as "todo" | "doing" | "paused" | "done";
        const srcList = lists[srcIndex];
        const destIndex = Object.keys(lists)[Number(destination.droppableId)] as unknown as "todo" | "doing" | "paused" | "done";
        const destList = lists[destIndex];
        // check if the source drop area is equal to destination drop area
        if(destination.droppableId === source.droppableId) {
            let tasks = reorderList(srcList, source.index, destination.index).tasks; 

            Object.keys(lists).forEach((list) => {
                const curr = list as unknown as "todo" | "doing" | "paused" | "done";
                if(curr !== srcIndex) {
                    tasks = tasks.concat(lists[curr].tasks);
                }
            });
            setData(tasks);
            return;
        }
        // if dont entered none of both validations above, source drop area and destination are differents
        let taskToChange: Task = {
            id: "", content: "", 
            createdAt: "", 
            status: 0, 
            projectId: ""
        };
        // get current task and change that status by list id (status)
        data.forEach((task) => {
            if(task.id === draggableId) {
                taskToChange = {...task, status: Number(destination.droppableId)}
            }
        });
        // push current task to destination list and reorder it
        destList.tasks.push(taskToChange);
        let tasks = reorderList(destList, destList.tasks.length - 1, destination.index).tasks;
        // remove current task from source list
        if(srcList.tasks[source.index].id === taskToChange.id) {
            srcList.tasks.splice(source.index, 1);
            tasks = tasks.concat(srcList.tasks);
        }
        // concatenate with the rest of lists and set state
        Object.keys(lists).forEach((list) => {
            const curr = list as unknown as "todo" | "doing" | "paused" | "done";
            if(curr !== destIndex && curr !== srcIndex) {
                tasks = tasks.concat(lists[curr].tasks);
            }
        });

        setData(tasks);
    }
    return (
        <DragDropContext onDragEnd={(result) => {handleDrop(result)}}>
            <BoardContainer>
                <div className="board_body">
                    {Object.keys(lists).map((list) => {
                        const current = lists[list as unknown as "todo" | "doing" | "paused" | "done"];
                        return (
                            <TaskList 
                                title={current.title} 
                                data={current.tasks} 
                                creatable={current.creatable} 
                                id={current.id}
                                setTaskList={setData}
                                taskList={data}
                                insertTask={props.insertTask}
                            />
                        )})
                    }
                </div>
            </BoardContainer>
        </DragDropContext>
    )
}