import { createReducer } from "@reduxjs/toolkit";
import actionTypes from "../constants/constants";
import contactActions from "../actions/contactsActions";

const deleteContact = (state, { payload }) =>
  state.filter((contact) => contact.id !== payload);

const items = createReducer([], {
  [contactActions.onFetchSuccess]: (state, { payload }) => payload,
  [contactActions.onAddSuccess]: (state, { payload }) => [...state, payload],
  [contactActions.onDeleteSuccess]: deleteContact,
});

const filter = createReducer("", {
  [actionTypes.SEARCH]: (state, { payload }) => (state = payload),
});

export default { items, filter };
