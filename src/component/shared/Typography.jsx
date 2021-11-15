import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";

const StyledTypography = styled(Typography)`
  text-align: center;
`;

export const TypographyComponent = (props) => {
  return <StyledTypography variant="h3">{props.children}</StyledTypography>;
};
