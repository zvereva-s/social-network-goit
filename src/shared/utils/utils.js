import * as Device from "expo-device";
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

export function handleDate() {
  const OS = Device.osName;

  const time = new Date().toLocaleTimeString().slice(0, 5);

  const dateArr =
    OS === "iOS"
      ? new Date().toLocaleDateString().split(".")
      : new Date().toLocaleDateString().split("/");

  if (dateArr[2].length < 4) {
    console.log(dateArr[2]);
    console.log(dateArr[2].replace(dateArr[2], `20${dateArr[2]}`));
    dateArr[2] = dateArr[2].replace(dateArr[2], `20${dateArr[2]}`);
  }

  switch (dateArr[1]) {
    case "01":
      dateArr[1] = "января,";
      break;
    case "02":
      dateArr[1] = "февраля,";
      break;
    case "03":
      dateArr[1] = "марта,";
      break;
    case "04":
      dateArr[1] = "апреля,";
      break;
    case "05":
      dateArr[1] = "мая,";
      break;
    case "06":
      dateArr[1] = "июня,";
      break;
    case "07":
      dateArr[1] = "июля,";
      break;
    case "08":
      dateArr[1] = "августа,";
      break;
    case "09":
      dateArr[1] = "сентября,";
      break;
    case "10":
      dateArr[1] = "октября,";
      break;
    case "11":
      dateArr[1] = "ноября,";
      break;
    case "12":
      dateArr[1] = "декабря,";
      break;
  }

  const dateString = dateArr.join(" ");
  return `${dateString} | ${time}`;
}
