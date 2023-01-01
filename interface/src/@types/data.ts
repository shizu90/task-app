export interface Task {
    id: string
    content: string
    createdAt: string
    projectId: string
    status: number // 0 = doing, 1 = todo, 2 = paused, 3 = done
}

export interface List {
    id: number
    title: string
    creatable: boolean
    tasks: Task[]
}

export interface Lists {
    todo: List
    doing: List
    done: List
    paused: List
}

export enum ListsTypes {"todo", "doing", "done", "paused"};

export interface Project {
    id: string
    title: string
    description: string
}

export interface LoginData {
    email: string
    password: string
}

export interface SignUpData {
    username: string
    email: string
    password: string
    confirmPassword: string
}