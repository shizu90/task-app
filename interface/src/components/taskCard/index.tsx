import { Pencil, Trash } from "phosphor-react";
import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { IModal, Task } from "../../@types/data";
import { Modal } from "../modal";
import { LabelStatus, TaskCardContainer } from "./style";

interface TaskCardProps {
    data: Task
    index: number
}


export function TaskCard(props: TaskCardProps) {
    const [isModalVisible, setIsModalVisible] = useState<IModal>({mode: "", visible: false});

    return (
        <>
            {isModalVisible ? isModalVisible.mode === "delete" ? (
                <Modal onClose={setIsModalVisible}>
                    <h1>Deletar?</h1>
                </Modal>
            ) : isModalVisible.mode === "edit" ? (
                <Modal onClose={setIsModalVisible}>
                    <h1>Editar?</h1>
                </Modal>
            ) : null : null}
            <Draggable index={props.index} draggableId={props.data.id}>
                {(provided) => (
                    <TaskCardContainer {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} key={props.data.id}>
                        <div>
                            <LabelStatus color={"#67BF"}/>
                        </div>
                        <p>{props.data.content}</p>
                        <span>
                            <Pencil onClick={() => setIsModalVisible({mode: "edit", visible: true})}/>
                            <Trash onClick={() => setIsModalVisible({mode: "delete", visible: true})}/>
                            {props.data.createdAt}
                        </span>
                    </TaskCardContainer>
                )}
            </Draggable>
        </>
    )
}