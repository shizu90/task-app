import styled from "styled-components";

export const BoardContainer = styled.div`
    padding: 20px;
    margin-left: 180px;
    display: flex;
    flex-direction: column;
    .board_header {
        background-color: ${props => props.theme.colors.accentBg};
        padding: 15px 20px 15px 20px;
        border-radius: 5px;
        font-size: ${props => props.theme.font.medium}px;
        font-weight: 600;
    }
`