import styled from "styled-components"

interface ErrorMessageStyleProps {
    opacity: 1 | 0
}

export const ErrorMessageStyle = styled.p<ErrorMessageStyleProps>`
    opacity: ${props => props.opacity};
    color: #EE2D4F;
`