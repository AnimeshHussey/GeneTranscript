import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </Box>
  );
}

const style = {
  color: "red",
  margin: "10px",
};

export default App;
