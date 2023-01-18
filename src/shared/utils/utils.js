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

export function handleTranslatingDate(date, lang) {
  const OS = Device.osName;
  let updDate;

  const dDMmYyyy = new Date(date).toLocaleDateString("pt-BR");
  const time = new Date(date).toLocaleTimeString().slice(0, 5);

  const mm = OS === "iOS" ? dDMmYyyy.split("/")[1] : dDMmYyyy.split("/")[0];

  switch (mm) {
    case "01":
      updDate = dDMmYyyy.replace(mm, lang === "ua" ? "січня," : "January");
      break;
    case "02":
      updDate = dDMmYyyy.replace(mm, lang === "ua" ? "лютого," : "February");
      break;
    case "03":
      updDate = dDMmYyyy.replace(mm, lang === "ua" ? "березня," : "March");
      break;
    case "04":
      updDate = dDMmYyyy.replace(mm, lang === "ua" ? "квітня," : "April");
      break;
    case "05":
      updDate = dDMmYyyy.replace(mm, lang === "ua" ? "травня," : "May");
      break;
    case "06":
      updDate = dDMmYyyy.replace(mm, lang === "ua" ? "червня," : "June");
      break;
    case "07":
      updDate = dDMmYyyy.replace(mm, lang === "ua" ? "липня," : "July");
      break;
    case "08":
      updDate = dDMmYyyy.replace(mm, lang === "ua" ? "серпня," : "August");
      break;
    case "09":
      updDate = dDMmYyyy.replace(mm, lang === "ua" ? "вересня," : "September");
      break;
    case "10":
      updDate = dDMmYyyy.replace(mm, lang === "ua" ? "жовтня," : "October");
      break;
    case "11":
      updDate = dDMmYyyy.replace(mm, lang === "ua" ? "листопада," : "November");
      break;
    case "12":
      updDate = dDMmYyyy.replace(mm, lang === "ua" ? "грудня," : "December");
      break;
  }

  const androidArr = updDate.split("/");
  const andrDate = [
    androidArr[1],
    androidArr[0],
    "20" + androidArr[2],
    "|",
    time,
  ].join(" ");

  return OS === "iOS"
    ? [...(updDate?.split("/") || ""), "|", time].join(" ")
    : andrDate;
}
