import styled from "styled-components";

export const TaskCardContainer = styled.div`
    position: relative;
    background-color: #303030;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    width: 100%;
    color: ${props => props.theme.colors.text};
    cursor: grab;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 10px;
        color: red;
    }

    p {
        font-weight: 500;
        line-height: 20px;
        font-size: 15px;
    }
    span {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: ${props => props.theme.colors.text}44;
        font-size: ${props => props.theme.font.small}px;
        margin-top: 5px;
        svg {
            margin-right: 10px;
            cursor: pointer;
            font-size: ${props => props.theme.font.medium}px;
            &:hover {
                color: ${props => props.theme.colors.error};
            }
        }
    }
`
export const LabelStatus = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background-color: ${props => props.color};
`