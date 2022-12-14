import { FormEvent, useState } from "react"
import { Link } from "react-router-dom"
import { Project } from "../../@types/data"
import { Button } from "../button"
import { Modal } from "../modal"
import { ProjectCard } from "../projectCard"
import { TextInput } from "../textInput"
import { ProjectsListStyle } from "./style"

interface ProjectsListProps {
    data: Project[]
}


export function ProjectsList(props: ProjectsListProps) {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [projects, setProjects] = useState<Project[]>(props.data);
    const [projectData, setProjectData] = useState<Project>({id: "template", title: "", description: ""});
    const handleRemoveProject = (id: string) => {
        setProjects(projects.filter(project => {
            return project.id !== id
        }))
    };

    const handleInsertProject = () => {
        if(projectData.title.length > 1 && projectData.description.length > 1) {
            setProjects([...projects, projectData]);
        }
        setIsModalVisible(false);
        setProjectData({id: "template", title: "", description: ""})
    }

    return (
        <ProjectsListStyle>
            <div className="main">
                <div className="create" onClick={() => setIsModalVisible(true)}>
                    +
                </div>
                {isModalVisible && 
                    <Modal onClose={setIsModalVisible}>
                        <form>
                            <TextInput placeholder="Project title" onChange={(event) => 
                                setProjectData({...projectData, title: event.target.value})} value={projectData.title}/>
                            <TextInput placeholder="Project description" onChange={(event) => 
                                setProjectData({...projectData, description: event.target.value})} value={projectData.description}/>
                            <Button type="submit" value="Save" onClick={() => handleInsertProject()}/>    
                        </form>
                    </Modal>
                }
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} data={project}/>
                ))}
            </div>
        </ProjectsListStyle>
    )
}