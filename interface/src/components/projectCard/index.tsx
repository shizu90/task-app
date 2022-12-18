import { Project } from "../../@types/data";
import { ProjectCardStyle } from "./style";
import { Folder, Trash, Pencil } from "phosphor-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "../modal";
import { Button } from "../button";
import { IModal } from "../../hooks/modal";

interface ProjectCardProps {
    data: Project
    setProjects: (param: Project[]) => void
    projects: Project[]
}

export function ProjectCard(props: ProjectCardProps) {
    const [isModalVisible, setIsModalVisible] = useState<IModal>({mode: "", visible: false});

    const handleClose = () => {
        setIsModalVisible({mode: "", visible: false});
    }

    const handleRemoveProject = (id: string) => {
        props.setProjects(props.projects.filter(project => {
            return project.id !== id
        }));
        handleClose();
    };

    return (
        <>
            {isModalVisible ? isModalVisible.mode === "delete" ? (
                <Modal onClose={setIsModalVisible}>
                    <h4>Delete project?</h4>
                    <form>
                        <div>
                            <Button value={"Yes"} style={{width: "35%"}} onClick={() => handleRemoveProject(props.data.id)}/>
                            <Button value={"No"} onClick={() => handleClose()}/>
                        </div>
                    </form>
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