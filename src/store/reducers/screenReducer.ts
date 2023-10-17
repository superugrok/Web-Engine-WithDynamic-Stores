import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IScreenReducerState } from "@Store/types/store";

export const getScreenReducer = (name, initialState: IScreenReducerState) =>
  createSlice({
    name,
    initialState,
    reducers: {
      CHANGE_ANY_KEY(state, action: PayloadAction<{ [key: string]: any }>) {
        state[action.payload.key] = action.payload.value;
      },
    },
  });
