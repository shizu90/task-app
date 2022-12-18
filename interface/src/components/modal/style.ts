import styled from "styled-components";

export const ModalStyle = styled.div`
    min-width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
        background-color: #1E1E1E;
        color: ${props => props.theme.colors.text};
        width: 35%;
        height: 50%;
        border-radius: 10px;
        display: flex;
        align-items: center;
        flex-direction: column;
        header {
            background-color: ${props => props.theme.colors.primary};
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 100%;
            .close {
                border: none;
                font-size: ${props => props.theme.font.md}px;
                background-color: transparent;
                transition: 0.2s color ease-out;
                cursor: pointer;
                outline: none;
                margin: 10px;
                color: ${props => props.theme.colors.text};
            }
        }
        .content {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
            flex-direction: column;
            gap: 30px;
            form {
                display: flex;
                flex-direction: column;
                gap: 20px;
                width: 60%;
                div {
                    display: flex;
                    gap: 16px;
                    justify-content: center;
                    align-items: center;
                    input {
                        width: 35%;
                    }
                }
            }
        }
    }
`