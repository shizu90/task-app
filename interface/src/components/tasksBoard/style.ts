import styled from "styled-components";

export const BoardContainer = styled.div`
    padding: 20px;
    margin-left: 140px;
    display: flex;
    flex-direction: column;
    .board_header {
        background-color: ${props => props.theme.colors.accentBg};
        padding: 15px 20px 15px 20px;
        border-radius: 5px;
        font-size: ${props => props.theme.font.md}px;
        font-weight: 600;
    }
    .board_body {
        display: flex;
        flex-direction: row;
    }
`