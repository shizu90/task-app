import { InputHTMLAttributes } from "react";
import { TextInputStyle } from "./style";

interface TextInputProps extends InputHTMLAttributes<any> {}

export function TextInput(props: TextInputProps) {
    return (
        <TextInputStyle {...props}/>
    )
}