import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filter.name;
export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);
