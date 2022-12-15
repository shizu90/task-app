import styled from "styled-components";

export const ButtonStyle = styled.input`
    padding: 10px 20px 10px 20px;
    font-size: 20px;
    background-color: ${props => props.theme.colors.primary};
    border: none;
    border-radius: 5px;
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.font.large};
    font-weight: 600;
    border: none;
    outline: none;
    text-align: center;
    cursor: pointer;
    transition: 0.2s background-color ease-out;
    &:hover, &:focus {
        background-color: ${props => props.theme.colors.secondary};
    }
`