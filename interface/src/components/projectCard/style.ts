import styled from "styled-components";

export const ProjectCardStyle = styled.div`
    background-color: ${props => props.theme.colors.accentTxt};
    padding: 10px;
    border-radius: 5px;
    width: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.2s background-color ease-out;
    border: none;
    outline: none;
    color: ${props => props.theme.colors.text};
    &:hover, &:focus {
        background-color: ${props => props.theme.colors.text}33;
    }
    h4 {
        font-size: ${props => props.theme.font.large}px;
        span {
            font-size: ${props => props.theme.font.medium}px;
            color: ${props => props.theme.colors.text}55;
            margin-left: 10px;
        }
    }
    p {
        margin-top: 25px;
        font-size: ${props => props.theme.font.small}px;
        color: ${props => props.theme.colors.text}cc;
    }
    span:not(h4>span) {
        display: flex;
        justify-content: flex-end;
        font-size: ${props => props.theme.font.small}px; 
        color: ${props => props.theme.colors.text}55;
    }
`