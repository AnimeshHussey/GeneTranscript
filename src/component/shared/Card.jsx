import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const CardComponent = (props) => {
  const { displayName, assemblyName, logicName, biotype } = props;
  return (
    <Card sx={{ maxWidth: 245 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.pharmaceutical-technology.com/wp-content/uploads/sites/10/2021/06/shutterstock_1669326868.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {displayName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {assemblyName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {logicName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {biotype}
        </Typography>
      </CardContent>
    </Card>
  );
};
