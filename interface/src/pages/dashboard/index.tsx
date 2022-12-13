import { Navbar } from "../../components/nav";
import { DashboardStyle } from "./style";

export function DashboardPage() {
    return (
        <DashboardStyle>
            <Navbar/>
            <main>
                <h1>Welcome</h1>
            </main>
        </DashboardStyle>
    )
}