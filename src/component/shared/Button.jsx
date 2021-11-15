import React from "react";
import Button from "@mui/material/Button";

export const CustomButton = (props) => {
  const { label, variant, color, disabled, onButtonClick } = props;
  return (
    <Button
      label={label}
      variant={variant}
      color={color}
      onClick={onButtonClick}
      disabled={disabled}
    >
      {props?.children || ""}
    </Button>
  );
};
