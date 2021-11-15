import React from "react";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/system";

const StyledStack = styled(Stack)`
  padding-top: 1%;
`;
export const StackComponent = (props) => {
  return (
    <StyledStack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {props.children}
    </StyledStack>
  );
};
