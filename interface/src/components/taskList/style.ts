import styled from "styled-components";

export const TaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    padding: 10px;
    & + div {
        border-left: 1px solid rgba(0, 0, 0, 0.2);
    }
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 32px;
        h2 {
            font-weight: 500;
            font-size: ${props => props.theme.font.large}px;
            padding: 0 10px;
        }
        input {
            font-size: ${props => props.theme.font.medium}px;
            padding: 5px 10px 5px 10px;
        }
    }
    ul {
        margin-top: 30px;
    }
`