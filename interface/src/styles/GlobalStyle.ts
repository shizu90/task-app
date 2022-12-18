import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::selection {
      color: ${props => props.theme.colors.text};
      background-color: ${props => props.theme.colors.primary};
    }
  }

  /* width */
::-webkit-scrollbar {
  width: 10px;
  border: 1px solid black;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${props => props.theme.colors.accentBg}cc;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: #88888855;
  transition: 0.2s background-color ease-out;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

  body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    background-color: #1E1E1E;
    color: #E1E1E6;
    overflow-x: hidden;
  }
`
