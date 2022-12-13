import { useState } from "react"
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

    return (
        <ProjectsListStyle>
            <div className="main">
                <div className="create" onClick={() => setIsModalVisible(true)}>
                    +
                </div>
                {isModalVisible && 
                    <Modal onClose={setIsModalVisible}>
                        <form>
                            <TextInput placeholder="Project title"/>
                            <TextInput placeholder="Project description"/>
                            <Button type="submit" value="Save" onClick={() => setIsModalVisible(false)}/>    
                        </form>
                    </Modal>
                }
                {props.data.map((project, index) => (
                    <Link key={project.id} to={`/dashboard/${project.id}/tasks`}>
                        <ProjectCard data={project}/>
                    </Link>
                ))}
            </div>
        </ProjectsListStyle>
    )
}