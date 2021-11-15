import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/ConfigureStore";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import { theme } from "./theme/theme";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
