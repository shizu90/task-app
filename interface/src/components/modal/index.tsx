import { ModalStyle } from "./style";
import { X } from "phosphor-react";
import { MouseEvent } from "react";

export function Modal({ id = "modal", onClose = () => {}, children }: any) {
    const outsideClose = (event: MouseEvent) => {
        if(event.target.id === id) {
            onClose();
        }
    }

    return (
        <ModalStyle id={id} onClick={(event) => outsideClose(event)}>
            <div className="container">
                <header>
                    <button className="close" onClick={() => onClose()}><X/></button>
                </header>
                <div className="content">
                    {children}
                </div> 
            </div>
        </ModalStyle>
    )
}