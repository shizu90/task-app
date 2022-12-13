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
`
export const LabelStatus = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 2px;
    background-color: ${props => props.color};
`