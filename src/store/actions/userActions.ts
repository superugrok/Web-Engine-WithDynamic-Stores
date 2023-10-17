import { IUserStatusData } from "screens/Cabinet/auth";
import { userReducer } from "@Store/reducers/userReducer";

export const changeAuth = (isAuth: boolean) =>
  userReducer.actions.CHANGE_AUTH_DATA(isAuth);

export const changeStatusData = (userStatusData: IUserStatusData) =>
  userReducer.actions.CHANGE_STATUS_DATA(userStatusData);