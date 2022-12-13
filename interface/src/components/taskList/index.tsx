import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "../../@types/data";
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
}

export function TaskList(props: TaskListProps) {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    return (
        <TaskListContainer>
            <header>
                <h2>{props.title}</h2>
                {props.creatable && (
                    <Button type="button" value="+" onClick={() => setIsModalVisible(true)}/>
                )}
            </header>
            {isModalVisible && 
                <Modal onClose={setIsModalVisible}>
                    <h1>Save a task</h1>
                    <form>
                        <TextInput placeholder="Task content"/>
                        <Button type="submit" value="Save" onClick={() => {setIsModalVisible(false)}}/>
                    </form>
                </Modal>
            }
            <Droppable droppableId={`${props.id}`}>
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef}>
                        {props.data.map((card: any, index: number) => <TaskCard index={index} key={card.id} data={card}/>)}        
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </TaskListContainer>
    )
}