import React, { useState } from "react";
import { CustomButton } from "../shared/Button";
import { TextBox } from "../shared/TextBox";
import { StackComponent } from "../shared/Stack";
import {
  getTranscriptdata,
  getSequence,
} from "../../repository/transcriptRepository";
import * as ActionTypes from "../../redux/actions/ReduxActions";

import { useDispatch } from "react-redux";

export const FilterComponent = (props) => {
  const {
    settransScriptIds,
    position,
    aminoacid,
    setPosition,
    setaminoacid,
    setissearchClicked,
    savedTranscripts,
  } = props;
  const [gene, setGene] = useState("");
  const dispatch = useDispatch();

  const onSearchClick = async (e) => {
    //Show ProgressBar
    dispatch({
      type: ActionTypes.SET_SEARCHING,
      value: true,
    });
    //Call transcript API
    const transcriptData = await getTranscriptdata(gene);
    //Call Api to get gene seq
    if (
      transcriptData?.Transcript &&
      Array.isArray(transcriptData.Transcript) &&
      transcriptData.Transcript.length > 0
    ) {
      dispatch({
        type: ActionTypes.SET_SEARCHED_GENE,
        value: transcriptData,
      });
      const transcriptIds = transcriptData.Transcript.map((item) => item.id);
      settransScriptIds(transcriptIds);
      let newIds = [];
      if (savedTranscripts.length > 0) {
        transcriptIds.forEach((x) => {
          if (!savedTranscripts.some((item) => item.id === x)) newIds.push(x);
        });
      } else {
        newIds = [...transcriptIds];
      }
      if (newIds.length > 0) {
        Promise.all(newIds.map((item) => getSequence(item)))
          .then((results) => {
            dispatch({
              type: ActionTypes.SET_TRANSCRIPT,
              value: results,
            });
          })
          .catch(console.log)
          .finally(() => {
            dispatch({
              type: ActionTypes.SET_SEARCHING,
              value: false,
            });
            setissearchClicked(true);
          });
      } else {
        setissearchClicked(true);
        dispatch({
          type: ActionTypes.SET_SEARCHING,
          value: false,
        });
      }
    }
  };

  const onResetClick = (e) => {
    setGene("");
    setPosition("");
    setaminoacid("");
    setissearchClicked(false);
  };

  return (
    <StackComponent>
      <TextBox
        id={"outlined-name"}
        label={"Transcript"}
        isRequired={true}
        Type={"text"}
        value={gene}
        onTextChange={setGene}
      ></TextBox>
      <TextBox
        id={"outlined-name"}
        label={"Position"}
        isRequired={true}
        type={"number"}
        value={position}
        onTextChange={setPosition}
      />
      <TextBox
        id={"outlined-name"}
        label={"Amino Acid"}
        isRequired={true}
        value={aminoacid}
        type={"text"}
        onTextChange={setaminoacid}
      />

      <CustomButton
        variant={"outlined"}
        color={"primary"}
        disabled={!gene || position <= 0 || !aminoacid}
        onButtonClick={onSearchClick}
      >
        {"Search"}
      </CustomButton>

      <CustomButton
        variant={"outlined"}
        color={"error"}
        onButtonClick={onResetClick}
      >
        {"Reset"}
      </CustomButton>
    </StackComponent>
  );
};
