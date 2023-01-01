import { ErrorMessageStyle } from "./style"

interface ErrorMessageProps {
    visible: boolean
    value: string
}

export function ErrorMessage(props: ErrorMessageProps) {
    return (
        <ErrorMessageStyle className="error" opacity={props.visible ? 1 : 0}>{props.value}</ErrorMessageStyle>
    )
}