import styled from "styled-components";

export const SideNavStyle = styled.div`
    left: 0;
    background-color: ${props => props.theme.colors.accentBg};
    display: flex;
    flex-direction: column;
    width: 180px;
    position: fixed;
    top: 52px;
    left: 0;
    z-index: 1;
    min-height: calc(100vh - 52px);
    gap: 20px;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    &:active {
        resize: horizontal;
    }
    overflow: auto;
    .group {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        background-color: transparent;
        color: ${props => props.theme.colors.text};
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.2s background-color ease-out;
        &:hover, &:focus {
            background-color: #292929;
        }
        border-radius: 5px;
        padding: 10px;
    }
`