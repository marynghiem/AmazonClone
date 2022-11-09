import React, { createContext, useContext, useReducer } from "react";

//Prepares the dataLayer
export const StateContext = createContext();

//Wrap our app and provide Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext value={useReducer(reducer, initialState)}>{children}</StateContext>
);

//Pull information from data layer
export const useStateValue = () => useContext(StateContext);
