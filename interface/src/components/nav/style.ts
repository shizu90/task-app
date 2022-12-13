import styled from "styled-components";

export const NavStyle = styled.nav`
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    position: fixed;
    z-index: 1;
    width: 100%;
    background-color: ${props => props.theme.colors.secondary};
    .signOut {
        cursor: pointer;
        border-radius: 100%;
        outline: none;
        &:focus {
            background-color: ${props => props.theme.colors.secondary};
        }
    }
    .icon {
        cursor: pointer;
        transition: 0.2s color ease-out;
        &:hover {
            color: ${props => props.theme.colors.accent};
        }
    }
    ul {
        list-style: none;
        gap: 24px;
        display: flex;
        align-items: center;
        a {
            font-weight: 600;
            text-decoration: none;
            color: ${props => props.theme.colors.text};
            outline: none;
        }
        a::after {
            display: block;
            content: '';
            border-bottom: 1.5px solid ${props => props.theme.colors.text};  
            transform: scaleX(0);  
            transition: transform 250ms ease-in-out;
        }
        a:hover::after, a:focus::after {
            transform: scaleX(1);
        }
        a::after {
            transform-origin: 0% 50%;
        }
        .loggedUser {
            display: flex;
            align-items: center;
            gap: 10px;
            .pic {
                background-color: black;
                width: 30px;
                height: 30px;
                border-radius: 100%;
            }
        }
    }
`