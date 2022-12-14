import { IModal, Project } from "../../@types/data";
import { ProjectCardStyle } from "./style";
import { Folder, Trash, Pencil } from "phosphor-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "../modal";
import { Button } from "../button";

interface ProjectCardProps {
    data: Project
}

export function ProjectCard(props: ProjectCardProps) {
    const [isModalVisible, setIsModalVisible] = useState<IModal>({mode: "", visible: false});


    return (
        <>
            {isModalVisible ? isModalVisible.mode === "delete" ? (
                <Modal onClose={setIsModalVisible}>
                    <h1>Are you sure you want to delete?</h1>
                    <Button value={"Yes"}/>
                    <Button value={"No, please let me go :("} onClick={() => setIsModalVisible({mode: "", visible: false})}/>
                </Modal>
            ) : isModalVisible.mode === "edit" ? (
                <Modal onClose={setIsModalVisible}>
                    <h1>Hello world</h1>
                </Modal>
            ) : null : null}
            <ProjectCardStyle tabIndex={0}>
                <h4>{props.data.title}<span><Link to={`/dashboard/${props.data.id}/tasks`}><Folder/></Link></span></h4>
                <p>{props.data.description}</p>
                <span>
                    <Pencil onClick={() => setIsModalVisible({mode: "edit", visible: true})}/>
                    <Trash onClick={() => setIsModalVisible({mode: "delete", visible: true})}/>
                    {props.data.id}
                </span>
            </ProjectCardStyle>
        </>
    )
}