import React from "react";
import { Header } from "./header";
import { MainComponent } from "./main";
import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <Stack spacing={2}>
      <Header></Header>
      <MainComponent></MainComponent>
    </Stack>
  );
};

export default Home;
