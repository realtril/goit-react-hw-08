import { createSelector } from "@reduxjs/toolkit";
export const contactsSelector = (state) => state.contacts.items;
export const filterSelector = (state) => state.contacts.filter;

export const getContactById = createSelector(
  [contactsSelector, (_, contactId) => contactId],
  (items, contactId) => items.find((contact) => contact.id === contactId)
);

export const getFilteredContact = createSelector(
  [contactsSelector, filterSelector],
  (items, filter) =>
    items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
