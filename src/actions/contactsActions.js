import actionTypes from "../constants/constants";
import { createAction } from "@reduxjs/toolkit";
import { SET_TOKEN, RESET_TOKEN } from "../constants/tokenConstants";

const onAddRequest = createAction(actionTypes.ACR);
const onAddSuccess = createAction(actionTypes.ACS);
const onAddFail = createAction(actionTypes.ACF);

const onFetch = createAction(actionTypes.FCR);
const onFetchSuccess = createAction(actionTypes.FCS);
const onFetchError = createAction(actionTypes.FCF);

const onDeleteContact = createAction(actionTypes.DCR);
const onDeleteSuccess = createAction(actionTypes.DCS);
const onDeleteFail = createAction(actionTypes.DCF);

const onSearch = createAction(actionTypes.SEARCH, (e) => ({
  payload: e.target.value,
}));

const onDelete = createAction(actionTypes.DELETE, (e) => ({
  payload: e.target.id,
}));

export const SET_ERROR = "@error/set";
export const RESET_ERROR = "@error/reset";

export const setError = (text) => ({
  type: SET_ERROR,
  payload: text,
});

export const resetError = () => ({
  type: RESET_ERROR,
});

export const LOADER_ON = "@loader/on";
export const LOADER_OFF = "@loader/off";

export const loaderOn = () => ({
  type: LOADER_ON,
});

export const loaderOff = () => ({
  type: LOADER_OFF,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const resetToken = () => ({
  type: RESET_TOKEN,
});

export default {
  onDelete,
  onSearch,
  onAddRequest,
  onAddSuccess,
  onAddFail,
  onFetch,
  onFetchSuccess,
  onFetchError,
  onDeleteContact,
  onDeleteSuccess,
  onDeleteFail,
};
