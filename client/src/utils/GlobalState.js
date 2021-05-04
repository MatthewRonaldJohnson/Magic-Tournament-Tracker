import React, { createContext, useReducer, useContext } from "react";
import {
  SET_USER
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_USER:
    return {
      userId: action.payload.id,
      tournaments: action.payload.tournaments,
      decks: action.payload.decks
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const defaultState = {
    userId: null,
    tournaments: [],
    decks: [],
  }

  const [state, dispatch] = useReducer(reducer, defaultState);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
