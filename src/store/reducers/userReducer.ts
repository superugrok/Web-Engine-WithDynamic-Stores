import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserAuthData, IUserStatusData } from "screens/Cabinet/auth";

const initialState: IUserAuthData = {
  isAuth: false,
  statusData: undefined,
};

export const userReducer = createSlice({
  name: "AUTH",
  initialState,
  reducers: {
    CHANGE_AUTH_DATA(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
    CHANGE_STATUS_DATA(state, action: PayloadAction<IUserStatusData>) {
      state.statusData = { ...action.payload };
    }
  }
});
