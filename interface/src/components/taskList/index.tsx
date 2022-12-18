import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "../../@types/data";
import { useModal } from "../../hooks/modal";
import { getDateNow } from "../../modules/date";
import { generateGuid } from "../../modules/guid";
import { Button } from "../button";
import { Modal } from "../modal";
import { TaskCard } from "../taskCard";
import { TextInput } from "../textInput";
import { TaskListContainer } from "./style";

interface TaskListProps {
    id: number
    data: Task[]
    title: string
    creatable: boolean
    setTaskList: (param: Task[]) => void
    taskList: Task[] 
}

export function TaskList(props: TaskListProps) {
    const {isModalVisible, setIsModalVisible} = useModal();
    const [taskData, setTaskData] = useState<Task>({id: generateGuid(8), content: "", createdAt: getDateNow(), projectId: "temp", status: 0});

    const handleClose = () => {
        setIsModalVisible({mode: "", visible: false});
    }

    const createTask = () => {
        setTaskData({...taskData, id: generateGuid(8)})
        if(props.id === 0 && props.creatable) {
            props.setTaskList([...props.taskList, taskData]);
        }
        handleClose();
    }

    return (
        <TaskListContainer>
            <header>
                <h2>{props.title}</h2>
                {props.creatable && (
                    <Button type="button" value="+" onClick={() => setIsModalVisible({mode: "create", visible: true})}/>
                )}
            </header>
            {isModalVisible.visible && 
                <Modal onClose={handleClose}>
                    <h4>Save new task</h4>
                    <form>
                        <TextInput placeholder="Task content" value={taskData.content} onChange={(e) => {setTaskData({...taskData, content: e.target.value})}}/>
                        <Button type="submit" value="Save" onClick={() => {createTask()}}/>
                    </form>
                </Modal>
            }
            <Droppable droppableId={`${props.id}`}>
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {props.data.map((card: any, index: number) => <TaskCard index={index} key={card.id} data={card} setTasksList={props.setTaskList} tasksList={props.taskList}/>)}        
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </TaskListContainer>
    )
}