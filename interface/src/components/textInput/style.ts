import styled from "styled-components";

export const TextInputStyle = styled.input`
    background-color: ${props => props.theme.colors.accentBg};
    color: ${props => props.theme.colors.text};
    border: none;
    outline: none;
    padding: 10px;
    font-size: ${props => props.theme.font.md}px;
    &::placeholder {
        color: ${props => props.theme.colors.accentTxt};
    }
`