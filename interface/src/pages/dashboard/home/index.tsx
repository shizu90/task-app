interface DashboardHomeProps {
    username: string
}

export function DashboardHome(props: DashboardHomeProps) {
    return (
        <h1>Welcome, {props.username}</h1>
    )
}