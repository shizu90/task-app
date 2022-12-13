import { Project } from "../../@types/data";
import { Board } from "../../components/board";
import { Navbar } from "../../components/nav";
import { SideNavbar } from "../../components/nav/sideNav";
import { ProjectsList } from "../../components/projectsList";
import { DashboardStyle } from "./style";

const projects: Project[] = [
    {id: "abc1", title: "Tasks", description: "A task app. asdfasd fas fgsfgs sfdgsdfg sdfghdsfgh"},
    {id: "dbc1", title: "Tasks 2", description: "A task app 2. asdgfasdfg s sfdgs sfdghsd dgdgfhd"},
    {id: "dbc1", title: "Tasks 2", description: "A task app 2. asdgfasdfg s sfdgs sfdghsd dgdgfhd"}
]

export function DashboardPage() {
    return (
        <DashboardStyle>
            <Navbar/>
            <main>
                <ProjectsList data={projects}/>
            </main>
        </DashboardStyle>
    )
}