import React from "react";
import { useSelector } from "react-redux";
import { TypographyComponent } from "../shared/Typography";

import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export const Header = () => {
  const isSearching = useSelector((state) => {
    const isSearching = state.TranscriptReducer.isSearching;
    return isSearching;
  });
  return (
    <Box>
      {isSearching && <LinearProgress color="secondary" />}
      <TypographyComponent variant="h3">Gartner</TypographyComponent>
    </Box>
  );
};
