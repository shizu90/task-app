import { Draggable } from "react-beautiful-dnd";
import { Task } from "../../@types/data";
import { LabelStatus, TaskCardContainer } from "./style";

interface TaskCardProps {
    data: Task
    index: number
}


export function TaskCard(props: TaskCardProps) {
    return (
        <Draggable index={props.index} draggableId={props.data.id}>
            {(provided) => (
                <TaskCardContainer {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} key={props.data.id}>
                    <div>
                        <LabelStatus color={"#67BF"}/>
                    </div>
                    <p>{props.data.content}</p>
                </TaskCardContainer>
            )}
        </Draggable>
    )
}