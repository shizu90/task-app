import styled from "styled-components";

export const ProjectCardStyle = styled.div`
    background-color: ${props => props.theme.colors.accentTxt};
    padding: 10px;
    border-radius: 5px;
    width: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: none;
    outline: none;
    color: ${props => props.theme.colors.text};

    svg {cursor: pointer}

    h4 {
        display: flex;
        align-items: center;
        font-size: ${props => props.theme.font.lg}px;
        span {margin-left: 10px}
        span, a {
            font-size: ${props => props.theme.font.md + 4}px;
            color: ${props => props.theme.colors.text}55;
            &:hover {
                color: #902bfc;
            }
        }
    }
    p {
        margin-top: 25px;
        font-size: ${props => props.theme.font.sm}px;
        color: ${props => props.theme.colors.text}cc;
    }
    span:not(h4>span) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        svg {
            margin-right: 10px;
            font-size: ${props => props.theme.font.md}px;
            &:hover {
                color: ${props => props.theme.colors.error};
            }
        }
        .id {
            width: 30%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        font-size: ${props => props.theme.font.sm}px; 
        color: ${props => props.theme.colors.text}55;
    }
`