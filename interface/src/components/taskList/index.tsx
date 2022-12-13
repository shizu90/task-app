import { Droppable } from "react-beautiful-dnd";
import { Task } from "../../@types/data";
import { Button } from "../button";
import { TaskCard } from "../taskCard";
import { TaskListContainer } from "./style";

interface TaskListProps {
    id: number
    data: Task[]
    title: string
    creatable: boolean
}

export function TaskList(props: TaskListProps) {
    return (
        <TaskListContainer>
            <header>
                <h2>{props.title}</h2>
                {props.creatable && (
                    <Button type="button" value="+"/>
                )}
            </header>
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