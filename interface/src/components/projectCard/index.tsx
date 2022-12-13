import { Project } from "../../@types/data";
import { ProjectCardStyle } from "./style";
import { Folder } from "phosphor-react";

interface ProjectCardProps {
    data: Project
}

export function ProjectCard(props: ProjectCardProps) {
    return (
        <ProjectCardStyle tabIndex={0}>
            <h4>{props.data.title}<span><Folder/></span></h4>
            <p>{props.data.description}</p>
            <span>{props.data.id}</span>
        </ProjectCardStyle>
    )
}