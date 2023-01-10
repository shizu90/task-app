import { Pencil, Trash } from "phosphor-react";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Task } from "../../@types/data";
import { useModal } from "../../hooks/modal";
import { Button } from "../button";
import { Modal } from "../modal";
import { TextInput } from "../textInput";
import { LabelStatus, TaskCardContainer } from "./style";

interface TaskCardProps {
    data: Task
    index: number
    setTasksList: (param: Task[]) => void
    tasksList: Task[]
    editTask: (data: Task, id: string) => void
    deleteTask: (id: string) => void
}


export function TaskCard(props: TaskCardProps) {
    const {isModalVisible, setIsModalVisible} = useModal();
    const [task, setTask] = useState<Task>(props.data);
    const [content, setContent] = useState<string>(props.data.content);

    const handleClose = () => {
        setIsModalVisible({mode: "", visible: false});
    }

    const handleDelete = () => {
        props.setTasksList(props.tasksList.filter(task => {
            return task.id !== props.data.id
        }));
        props.deleteTask(task.id);
        handleClose();
    }

    const handleEdit = () => {
        setTask({...task, content})
        if(task.content.length > 1) {
            props.setTasksList(props.tasksList.map(t => {
                if(t.id === props.data.id) {
                    return {...task, content};
                }else return t;
            }));
            props.editTask({...task, content}, task.id);
        }
        handleClose();
    }

    return (
        <>
            {isModalVisible ? isModalVisible.mode === "delete" ? (
                <Modal onClose={handleClose}>
                    <h4>Delete task?</h4>
                    <form>
                        <div>
                            <Button value="Yes" onClick={() => handleDelete()}/>
                            <Button value="No" onClick={() => handleClose()}/>
                        </div>
                    </form>
                </Modal>
            ) : isModalVisible.mode === "edit" ? (
                <Modal onClose={handleClose}>
                    <h4>Edit task</h4>
                    <form>
                        <p>Task id: {task.id}</p>
                        <p>Task project id: {task.projectId}</p>
                        <TextInput placeholder="Task content..." value={content} onChange={(e) => setContent(e.target.value)}/>
                        <Button type="submit" value="Save" onClick={() => handleEdit()}/>
                    </form>
                </Modal>
            ) : null : null}
            <Draggable index={props.index} draggableId={task.id}>
                {(provided) => (
                    <TaskCardContainer {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} key={task.id}>
                        <div>
                            <LabelStatus color={
                                task.status === 0 ?
                                "#f2f2f2" : task.status === 1 ? 
                                "#721DB5" : task.status === 2 ? 
                                "#E5BD55" : "#2fce5c"
                            }/>
                        </div>
                        <p>{task.content}</p>
                        <span>
                            <Pencil onClick={() => {setIsModalVisible({mode: "edit", visible: true})}}/>
                            <Trash onClick={() => setIsModalVisible({mode: "delete", visible: true})}/>
                            {task.createdAt}
                        </span>
                    </TaskCardContainer>
                )}
            </Draggable>
        </>
    )
}