import React from "react";
import TextField from "@mui/material/TextField";

export const TextBox = (props) => {
  const { id, label, isRequired, type, value, onTextChange } = props;

  return (
    <TextField
      id={id}
      required={isRequired}
      label={label}
      type={type}
      value={value}
      onChange={(event) => onTextChange(event.target.value.toUpperCase())}
    />
  );
};
