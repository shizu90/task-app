import styled from "styled-components";

export const ProjectsListStyle = styled.div`
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.font.large}px;
    width: 100%;
    min-height: calc(100vh - 52px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .main {
        width: 80%;
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        a {
            text-decoration: none;
        }
        .create {
            font-size: ${props => props.theme.font.large * 2}px;
            background-color: ${props => props.theme.colors.primary};
            display: flex;
            align-items: center;
            padding: 0px 20px 0px 20px;
            border-radius: 5px;
            cursor: pointer;
            &:hover {
                background-color: ${props => props.theme.colors.secondary};
            }
        }
    }
`