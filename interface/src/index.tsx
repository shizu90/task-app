import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { App } from "./App";
import { AuthProvider } from "./context/AuthContext";
import theme from "./styles/theme";

ReactDOM.render(<AuthProvider><ThemeProvider theme={theme}><App /></ThemeProvider></AuthProvider>, document.getElementById("root"));
