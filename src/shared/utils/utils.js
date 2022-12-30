import { createAsyncThunk } from "@reduxjs/toolkit";

export const createOperation = (name, request, condition) => {
  return createAsyncThunk(
    name,
    async (data, { rejectWithValue }) => {
      try {
        const response = await request(data);
        return response;
      } catch (error) {
        console.log("error", error);
        console.log("error.message", error.message);
        return rejectWithValue(error);
        // throw error;
      }
    },
    { condition }
  );
};

export const createOperationForBuilder = (name, request, condition) => {
  return createAsyncThunk(
    name,
    async (data, { rejectWithValue }) => {
      const response = await request(data).json();
      if (!response) {
        return rejectWithValue(error);
      }

      return response;
    },
    { condition }
  );
};
