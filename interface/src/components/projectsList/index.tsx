import { useState } from "react"
import { Project } from "../../@types/data"
import { useModal } from "../../hooks/modal"
import { Button } from "../button"
import { Modal } from "../modal"
import { ProjectCard } from "../projectCard"
import { TextInput } from "../textInput"
import { ProjectsListStyle } from "./style"

interface ProjectsListProps {
    data: Project[]
    insertProject: (data: Project) => void
    deleteProject: (projectId: string) => void
    editProject: (projectId: string, data: Project) => void
}


export function ProjectsList(props: ProjectsListProps) {
    const {isModalVisible, setIsModalVisible} = useModal();
    const [projects, setProjects] = useState<Project[]>(props.data);
    const [projectData, setProjectData] = useState<Project>({id: "template", title: "", description: ""});

    const handleClose = () => {
        setIsModalVisible({mode: "", visible: false});
    }

    const handleInsertProject = () => {
        if(projectData.title.length > 1 && projectData.description.length > 1) {
            props.insertProject(projectData);
            setProjects([...projects, projectData]);
        }
        handleClose();
        setProjectData({id: "template", title: "", description: ""})
    }

    return (
        <ProjectsListStyle>
            <div className="main">
                <div className="create" onClick={() => setIsModalVisible({mode: "create", visible: true})}>
                    +
                </div>
                {isModalVisible.visible ?
                isModalVisible.mode === "create" && (
                    <Modal onClose={handleClose}>
                        <h4>Save new project</h4>
                        <form>
                            <TextInput placeholder="Project title" onChange={(event) => 
                                setProjectData({...projectData, title: event.target.value})} value={projectData.title}/>
                            <TextInput placeholder="Project description" onChange={(event) => 
                                setProjectData({...projectData, description: event.target.value})} value={projectData.description}/>
                            <Button type="submit" value="Save" onClick={() => handleInsertProject()}/>    
                        </form>
                    </Modal>
                ) : null
                }
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={project.id} 
                        data={project} 
                        setProjects={setProjects} 
                        projects={projects} 
                        deleteProject={props.deleteProject}
                        editProject={props.editProject}/>
                ))}
            </div>
        </ProjectsListStyle>
    )
}