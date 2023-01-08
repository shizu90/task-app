import { Project } from "../../@types/data";
import { ProjectCardStyle } from "./style";
import { Folder, Trash, Pencil } from "phosphor-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "../modal";
import { Button } from "../button";
import { IModal } from "../../hooks/modal";
import { TextInput } from "../textInput";

interface ProjectCardProps {
    data: Project
    setProjects: (param: Project[]) => void
    projects: Project[]
}

export function ProjectCard(props: ProjectCardProps) {
    const [isModalVisible, setIsModalVisible] = useState<IModal>({mode: "", visible: false});
    const [projectData, setProjectData] = useState({title: props.data.title, desc: props.data.description});

    const handleClose = () => {
        setIsModalVisible({mode: "", visible: false});
    }

    const handleRemoveProject = (id: string) => {
        props.setProjects(props.projects.filter(project => {
            return project.id !== id
        }));
        handleClose();
    };

    const handleEditProject = (id: string) => {
        props.setProjects(props.projects.map(project => {
            if(project.id === id) {
                project.title = projectData.title;
                project.description = projectData.desc;
            }
            return project;
        }));
        handleClose();
    }

    return (
        <>
            {isModalVisible ? isModalVisible.mode === "delete" ? (
                <Modal onClose={handleClose}>
                    <h4>Delete project?</h4>
                    <form>
                        <div>
                            <Button value={"Yes"} style={{width: "35%"}} onClick={() => handleRemoveProject(props.data.id)}/>
                            <Button value={"No"} onClick={() => handleClose()}/>
                        </div>
                    </form>
                </Modal>
            ) : isModalVisible.mode === "edit" ? (
                <Modal onClose={handleClose}>
                    <h4>Edit project</h4>
                    <form>
                        <p>Project id: {props.data.id}</p>
                        <p>Project title: {props.data.title}</p>
                        <TextInput placeholder="Project title..." value={projectData.title} onChange={e => setProjectData({...projectData, title: e.target.value})}/>
                        <TextInput placeholder="Project description..." value={projectData.desc} onChange={e => setProjectData({...projectData, desc: e.target.value})}/>
                        <Button type="submit" value="Save" onClick={() => handleEditProject(props.data.id)}/>
                    </form>
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