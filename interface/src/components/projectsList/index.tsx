import { Link } from "react-router-dom"
import { Project } from "../../@types/data"
import { ProjectCard } from "../projectCard"
import { ProjectsListStyle } from "./style"

interface ProjectsListProps {
    data: Project[]
}


export function ProjectsList(props: ProjectsListProps) {
    return (
        <ProjectsListStyle>
            <div className="main">
                <div className="create">
                    +
                </div>
                {props.data.map((project, index) => (
                    <Link key={project.id} to={`/dashboard/${project.id}/tasks`}>
                        <ProjectCard data={project}/>
                    </Link>
                ))}
            </div>
        </ProjectsListStyle>
    )
}