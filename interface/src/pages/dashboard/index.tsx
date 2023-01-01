import { Navbar } from "../../components/nav";
import { DashboardStyle } from "./style";

export function DashboardPage() {
    return (
        <DashboardStyle>
            <Navbar/>
            <main>
                <h1>Welcome, User</h1>
            </main>
        </DashboardStyle>
    )
}