import styled from "styled-components";

export const LoginPageStyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100vw;
    gap: 50px;

    .cubes {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: -1;
    }

    @keyframes animate {
        0% {
            opacity: 1;
            border-radius: 0;
            transform: translateY(0) rotate(0deg);
        }

        100% {
            opacity: 0;
            border-radius: 50%;
            transform: translateY(-1000px) rotate(720deg);
        }
    }

    .cubes div {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.15);
        bottom: -150px;
        animation: animate 25s linear infinite;
    }

    .cubes div:nth-child(1) {
        left: 25%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
    }
    .cubes div:nth-child(2) {
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }
    .cubes div:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }
    .cubes div:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }
    .cubes div:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }
    .cubes div:nth-child(6) {
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
    }
    .cubes div:nth-child(7) {
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
    }
    .cubes div:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }
    .cubes div:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 400px;
        .group {
            margin-bottom: 10px;
            .input {
                display: flex;
                background-color: #191919;
                svg {
                    margin: 10px;
                    color: ${props => props.theme.colors.text};
                    transition: 0.2s color ease-out;
                }
                input {
                    width: 100%;
                }
            }
        }
    }

    a {
        color: ${props => props.theme.colors.text};
        transition: 0.2s color ease-out;
        border: none;
        outline: none;
        &:hover, &:focus {
            color: ${props => props.theme.colors.primary};
        }
    }
`