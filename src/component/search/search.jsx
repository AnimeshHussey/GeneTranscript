import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { CardComponent } from "../shared/Card";
import { TypographyComponent } from "../shared/Typography";
import Grid from "@mui/material/Grid";
import { StackComponent } from "../shared/Stack";

export const SearchedResult = (props) => {
  const {
    position,
    aminoacid,
    transScriptIds,
    savedTranscripts,
    issearchClicked,
    setissearchClicked,
    searchedgenedata,
  } = props;
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (issearchClicked && savedTranscripts.length > 0) {
      searchData();
    } else {
      if (!position && !issearchClicked) setSearchResult([]);
    }
  }, [issearchClicked, savedTranscripts, position]);

  const searchData = () => {
    if (Array.isArray(transScriptIds)) {
      let matchedItems = [];
      transScriptIds.forEach((x) => {
        savedTranscripts.some((item) => {
          if (item.id === x && item.seq.charAt(position) === aminoacid) {
            matchedItems.push(
              searchedgenedata?.Transcript?.find((data) => data.id === x)
            );
          }
        });
      });
      setSearchResult(matchedItems);
      setissearchClicked(false);
    }
  };

  return (
    <Box Box style={{ padding: "1% 25%" }}>
      {/* <Grid

        justifyContent="center"
        alignItems="center"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      > */}
      <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-start"
        rowSpacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {Array.isArray(searchResult) &&
          searchResult.length > 0 &&
          searchResult.map((item, index) => (
            // <Grid item md={2}>
            <Grid item xs={2} sm={4} md={4} key={index}>
              <CardComponent
                displayName={item?.display_name || ""}
                assemblyName={item?.assembly_name || ""}
                logicName={item?.logic_name || ""}
                biotype={item?.biotype || ""}
              ></CardComponent>
            </Grid>
          ))}
      </Grid>

      {!Array.isArray(searchResult) && searchResult.length === 0 && (
        <StackComponent>
          <TypographyComponent>No rsult found </TypographyComponent>
        </StackComponent>
      )}
    </Box>
  );
};
