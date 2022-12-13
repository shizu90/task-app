import { Navbar } from "../../../components/nav";
import { SideNavbar } from "../../../components/nav/sideNav";
import { TasksBoard } from "../../../components/tasksBoard";
import { DashboardStyle } from "../style";

export function TasksPage() {
    return (
        <DashboardStyle>
            <Navbar/>
            <main>
                <SideNavbar/>
                <TasksBoard/>
            </main>
        </DashboardStyle>
    )
}