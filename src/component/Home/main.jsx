import React, { useState } from "react";
import Box from "@mui/material/Box";
import { FilterComponent } from "../filter/filterComponent";
import { SearchedResult } from "../search/search";
import { useSelector } from "react-redux";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import { StackComponent } from "../shared/Stack";

export const MainComponent = () => {
  const [transScriptIds, settransScriptIds] = useState([]);
  const [position, setPosition] = useState("");
  const [aminoacid, setaminoacid] = useState("");
  const [issearchClicked, setissearchClicked] = useState(false);

  const savedTranscripts = useSelector((state) => {
    const transcripts = state.TranscriptReducer.transcripts;
    return transcripts;
  });

  const searchedgenedata = useSelector((state) => {
    const genedata = state.TranscriptReducer.searchedGene;
    return genedata;
  });

  const increaseCount = () => {
    setPosition(parseInt(position) + 10);
    setissearchClicked(true);
  };
  const decreaseCount = () => {
    if (parseInt(position) > 0) {
      setPosition(parseInt(position) - 10);
      setissearchClicked(true);
    }
  };

  return (
    <Box flex={1}>
      <FilterComponent
        settransScriptIds={settransScriptIds}
        position={position}
        aminoacid={aminoacid}
        setPosition={setPosition}
        setaminoacid={setaminoacid}
        setissearchClicked={setissearchClicked}
        savedTranscripts={savedTranscripts}
      ></FilterComponent>
      {transScriptIds && (
        <StackComponent>
          <IconButton
            aria-label="previous"
            color="primary"
            onClick={decreaseCount}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <SearchedResult
            position={position}
            aminoacid={aminoacid}
            transScriptIds={transScriptIds}
            savedTranscripts={savedTranscripts}
            issearchClicked={issearchClicked}
            setissearchClicked={setissearchClicked}
            searchedgenedata={searchedgenedata}
          ></SearchedResult>
          <IconButton
            aria-label="Next"
            disabled={false}
            color="primary"
            onClick={increaseCount}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </StackComponent>
      )}
    </Box>
  );
};
