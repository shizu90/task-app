import { InputHTMLAttributes } from "react";
import { ButtonStyle } from "./style";

interface ButtonProps extends InputHTMLAttributes<any> {}

export function Button(props: ButtonProps) {
    return (
        <ButtonStyle {...props}/>
    )
}