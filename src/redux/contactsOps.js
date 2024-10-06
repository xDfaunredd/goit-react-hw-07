import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://67015bedb52042b542d78cfe.mockapi.io/";

export const fetchAllContacts = createAsyncThunk(
  "contacts/fetchAllContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/items");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post("/items", contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (taskId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/items/${taskId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
