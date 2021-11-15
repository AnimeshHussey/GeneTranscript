import * as ActionTypes from "../actions/ReduxActions";
import Immutable from "seamless-immutable";

const INITIAL_STATE = Immutable({
  transcripts: [],
  searchedGene: {},
  isSearching: false,
  isSearched: false,
});

export const TranscriptReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_TRANSCRIPT:
      const newtranscripts = [...state.transcripts, ...action.value];
      return { ...state, transcripts: newtranscripts };

    case ActionTypes.SET_SEARCHED_GENE:
      return { ...state, searchedGene: action.value };

    case ActionTypes.SET_SEARCHING:
      return { ...state, isSearching: action.value };
    default:
      return state;
  }
};
